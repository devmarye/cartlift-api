const pool = require("../config/db");

const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");

    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

const getProductById = async (req, res) => {
  const productId = Number(req.params.id);

  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      productId,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  if (!name || !description || price === undefined || stock === undefined) {
    return res.status(400).json({
      success: false,
      message: "name, description, price, and stock are required",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO products (name, description, price, stock)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, description, price, stock]
    );

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
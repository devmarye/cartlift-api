const express = require("express");
const productRoutes = require("./routes/productRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/products", productRoutes);

module.exports = app;
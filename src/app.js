const express = require("express");
const productRoutes = require("./routes/productRoutes");
const healthRoutes = require("./routes/healthRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
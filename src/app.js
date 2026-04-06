const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/health", healthRoutes);

function registerAppRoutes() {
  app.use("/products", require("./routes/productRoutes"));
  app.use(notFound);
  app.use(errorHandler);
}

module.exports = { app, registerAppRoutes };
const app = require("./app");
const pool = require("./config/db");
const env = require("./config/env");

const startServer = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("Database connected successfully");

    app.listen(env.PORT, () => {
      console.log(`CartLift API running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  }
};

startServer();
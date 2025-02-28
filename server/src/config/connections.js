import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import config from "./config.js"; // Ensure this is pointing to the correct config file

dotenv.config(); // Load .env variables

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: false, // Set to true for debugging queries
  }
);

export default sequelize; // ✅ Use default export

// PREVIOUSLY COMMENTED OUT CODE
/*import { Sequelize } from "sequelize";


const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || "default_db_name",
      process.env.DB_USER || "default_db_user",
      process.env.DB_PASSWORD || "default_db_pw",
      {
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
      }
    );

//  ES module export
export default sequelize;
*/

/* 
const { Sequelize } = require("sequelize");

let sequelize;
// If the environment variable DB_URL is set, use it to connect to the database.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || "default_db_name",
    process.env.DB_USER || "default_db_user",
    process.env.DB_PW || "default_db_pw",
    { host: "localhost", dialect: "postgres" }
  );
}

module.exports = sequelize;
// Export the connection
*/

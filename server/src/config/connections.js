import { Sequelize } from "sequelize";

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

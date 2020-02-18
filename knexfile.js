require("dotenv").config();
module.exports = {
  client: "postgresql",
  connection: process.env.DATABASE_CONNECTION || {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./server/data/migrations"
  }
};

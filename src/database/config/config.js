require("dotenv").config();

module.exports = {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  port: process.env.POSTGRES_PORT,
  define: {
    timestamps: true,
    underscored: false,
  },
};

import mysql from "mysql2";

require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT);

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: Number(DB_PORT),
});

export default pool;

import pg from "pg";

const { Client } = pg;

const db = new Client({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: "5555",
  database: "perntodo",
});

export default db;

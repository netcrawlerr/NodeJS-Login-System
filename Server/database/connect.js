import { createPool } from "mysql2";
import dotenv from "dotenv";
dotenv.config();
export const db = createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

export const connectDB = () => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        console.error("Error Connecting DB ", err);
        reject(err);
      } else {
        console.log("Connected To DB 🚀🚀");
        connection.release();
        resolve();
      }
    });
  });
};

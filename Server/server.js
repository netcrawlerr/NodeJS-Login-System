import express, { query } from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connect.js";

import authRouter from "./routes/authRouter.js";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use(express.json());

app.use("/api/auth/", authRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("Server Running On Port ", process.env.PORT);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// auth routes
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

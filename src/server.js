import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from "dotenv";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGODB_URI);

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

// middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is live" });
});

app.use("/api/notes", noteRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

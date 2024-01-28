/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import apiRoutes from "./src/routes.js";

const api = express();

api.use(express.json());
api.use(cookieParser());

// cors enabling
api.use(
  cors({
    origin: "*",
    methods: ["GET,PUT,POST,DELETE,OPTIONS"],
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "Content-Type",
      "Authorization",
      "Content-Length",
      "X-Requested-With",
    ],
    credentials: true,
  }),
);

// get Routes
api.use("/api", apiRoutes);

// Set server
const PORT = process.env.API_PORT || 5000;

api.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`);
});

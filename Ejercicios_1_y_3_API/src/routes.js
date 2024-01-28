import express from "express";
import { getTopGoogleRepos, oddNumbers } from "./controllers/repositories.js";

const router = express.Router();

router.get("/top", getTopGoogleRepos);
router.get("/odds", oddNumbers);

export default router;

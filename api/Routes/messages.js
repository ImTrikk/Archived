import express from "express";
import { WriteMessage } from "../controllers/writeMessage.js";

const router = express.Router();

// writing message endpoint
router.post("/write", WriteMessage);

export { router as messageRouter };

import express from "express";
import { WriteMessage } from "../controllers/writeMessage.js";
import { Message } from "../controllers/messagesQuery.js";

const router = express.Router();

// writing message endpoint
router.post("/write", WriteMessage);

router.get("/all", Message)

export { router as messageRouter };

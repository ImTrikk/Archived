import express from "express";
import { WriteMessage } from "../controllers/writeMessage.js";
import { Message } from "../controllers/messagesQuery.js";
import { AllMessage } from "../controllers/AllMessages.js";

const router = express.Router();

// writing message endpoint
router.post("/write", WriteMessage);
router.get("/limit", Message)
router.get("/all", AllMessage)

export { router as messageRouter };

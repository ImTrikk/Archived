import express from "express";
import { WriteMessage } from "../controllers/writeMessage.js";
import { Message } from "../controllers/messagesQuery.js";

const router = express.Router();

// writing message endpoint
router.get("/all", Message);
router.post("/write", WriteMessage);


export { router as messageRouter };

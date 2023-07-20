import express from "express";
import { WriteMessage } from "../controllers/writeMessage.js";
import { Message } from "../controllers/messagesQuery.js";
import { Person } from "../controllers/getPerson.js";

const router = express.Router();

// writing message endpoint
router.get("/all", Message);
router.post("/write", WriteMessage);
router.get("/person", Person);

export { router as messageRouter };

import express from "express";
import { MessageModels } from "../Models/Messages.js";

const router = express.Router();

router.post("/write", async (req, res) => {
  const { message, person } = req.body;

  try {
    const newMessage = new MessageModels({
      message,
      person,
    });

    await newMessage.save();

    return res.status(201).json(newMessage, { message: "New Message Created" })
  } catch (err) {
    console.log("Error");
  }
});

export { router as messageRouter };

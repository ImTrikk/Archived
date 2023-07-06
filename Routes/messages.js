import express from "express";
import { MessageModels } from "../Models/Messages.js";

const router = express.Router();

// writing message endpoint
router.post("/write", async (req, res) => {
  const { message, person } = req.body;

  try {
    const newMessage = new MessageModels({
      message,
      person,
    });

    await newMessage.save();
    res.json({message: "Success creating message"})

  } catch (err) {
    console.log("Error creating message");
  }
});

export { router as messageRouter};

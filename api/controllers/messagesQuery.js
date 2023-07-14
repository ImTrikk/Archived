import { MessageModels } from "../Models/Messages.js";

export const Message = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20; // Default limit is 10 messages
    const messages = await MessageModels.find().limit(limit);
    return res.status(201).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

import { MessageModels } from "../Models/Messages.js";

export const AllMessage = async (req, res) => {
  try {
    const messages = await MessageModels.find();
    return res.status(201).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

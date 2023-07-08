import { MessageModels } from "../Models/Messages.js";

export const Message = async (req, res) => {
  try {
    const messages = await MessageModels.find().maxTimeMS(8000);
    return res.status(201).json(messages);
  } catch (err) {
    console.log(err);
  }
};

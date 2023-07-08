import { MessageModels } from "../Models/Messages.js";

export const Message = async (req, res) => {
  try {
    const messages = await MessageModels.find().setTimeout(() => {}, 8000);
    // const limit = messages.slice(0, 10)
    // return res.status(201).json(limit);
    return res.status(201).json(messages);
  } catch (err) {
    console.log(err);
  }
};

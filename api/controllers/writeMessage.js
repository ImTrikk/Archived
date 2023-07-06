import { MessageModels } from "../Models/Messages.js";

export const WriteMessage = async (req, res) => {
  const { message, person } = req.body;

  try {
    const newMessage = new MessageModels({
      message,
      person,
    });

    await newMessage.save();
    res.json({ message: "Success creating message" });
  } catch (err) {
    console.log("Error creating message");
  }
};

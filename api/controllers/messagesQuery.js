import { MessageModels } from "../Models/Messages.js";

export const Message = async (req, res) => {
	try {
		const messages = await MessageModels.find();
		return res.status(200).json(messages);
	} catch (err) {
		console.error("Error fetching messages:", err);
		return res.status(500).json({ error: "Server error" });
	}
};

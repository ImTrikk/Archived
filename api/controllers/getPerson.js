import { MessageModels } from "../Models/Messages.js";

export const Person = async (req, res) => {
 try {
  const { person } = req.body;

  console.log(person);

  const searchedPerson = await MessageModels.find({ person: person });
  console.log(searchedPerson);
  return res.status(200).json(searchedPerson);
 } catch (err) {
  console.error("Error fetching messages:", err);
  return res.status(500).json({ error: "Server error" });
 }
};

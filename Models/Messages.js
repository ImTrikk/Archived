import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  person: {
    type: String,
    required: true,
  },
});

export const MessageModels = mongoose.model("message", MessageSchema);

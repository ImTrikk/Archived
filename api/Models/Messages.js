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
  dateField: {
    type: Date,
    default: Date.now,  
  },
});
export const MessageModels = mongoose.model("message", MessageSchema);

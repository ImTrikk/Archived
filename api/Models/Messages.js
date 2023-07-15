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
    default: () => {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      return currentDate;
    },
  },
});
export const MessageModels = mongoose.model("message", MessageSchema);

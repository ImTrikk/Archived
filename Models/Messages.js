import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  person:{
   type: String
  }
});

export const MessageModels = mongoose.model("messages", MessageSchema)

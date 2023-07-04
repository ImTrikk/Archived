import mongoose from "mongoose";

export const dbConnection = () =>{
   const mongodbURI = "mongodb+srv://Archived:Archived_2023_18@cluster0.brnzkck.mongodb.net/";

   mongoose.connect(mongodbURI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
   }).then(() => console.log("MongoDB is now Connected"))

}
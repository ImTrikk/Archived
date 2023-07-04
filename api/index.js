import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { dbConnection } from "./database.js";
import { messageRouter } from "../Routes/messages.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use("/api/write", messageRouter)


try{
   dbConnection()
} catch(err){
   console.log("Error Connection")
}

app.listen(3000, () => console.log("Server listining on port 3000"))
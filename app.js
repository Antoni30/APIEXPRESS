import express from "express";
import env from "dotenv";
import tasks from "./app/routes/tasks.js"
import dbConnect from "./config/mongo.js";
import cors from "cors"

env.config();
const app = express();
const port = process.env.PORT | 9000;


//midellware
app.use(cors())
app.use(express.json())
app.use('/api',tasks)


//route main
app.get('/',(req,res)=>{
    res.send("Welcom to my API");
});

dbConnect();

//initial application
app.listen(port, ()=>{
    console.log(`server listing on port http://localhost:${port}`)})
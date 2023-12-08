import mongoose from "mongoose";

const dbConnect = ()=>{
//conecction to database
    mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("Connected to MongoDB ATLAS "))
        .catch((error)=>console.log(error));
}

export default dbConnect;
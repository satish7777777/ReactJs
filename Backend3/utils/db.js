import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/mern_backend"

//mongoose.connect(URI);

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connection succeful");
    }
    catch(error){
        console.log(error);
        console.log("Failed Coonection");
        process.exit(0);
    }
}

module.exports = connectDb
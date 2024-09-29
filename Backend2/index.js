import express from "express";

const app = express();
import router from './auth-router'

app.use("/", (req, res)=> res.send("api is working"));
app.use("/api", router)

const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`Server is running at ${port}`);
})
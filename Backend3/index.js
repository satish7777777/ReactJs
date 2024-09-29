import express from "express";
import router from "./router/auth-router.js"; // Ensure you include the file extension
import connectDb from "./utils/db.js";

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;
app.use("/auth", router);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
});

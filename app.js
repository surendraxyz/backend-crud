import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import db from "./database/db.js";


const app = express();

dotenv.config();
const port = process.env.PORT;
db();
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log("server started");
});

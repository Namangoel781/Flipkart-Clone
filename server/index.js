import express from "express";
import DefaultData from "./default.js";
import { connectDb } from "./database/db.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8000;

const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://namangoel781:Naman%40781@cluster0.ypvnvi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

connectDb(URL).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is running successfully on PORT ${PORT}`)
  );
});

DefaultData();

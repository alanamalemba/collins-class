import express from "express";
import { connection } from "./config/db.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  //test mysql connection
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.send("Error occurred");
    } else {
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server running at port: " + PORT);
});

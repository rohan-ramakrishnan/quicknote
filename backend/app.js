const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const indexRoutes = require("./routes/index");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/", indexRoutes);

mongoose
  .connect(
    "mongodb+srv://root:" +
      process.env.DB_PASSWORD +
      "@cluster0.iqeag.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port: " + process.env.PORT);
      console.log("Connected to DB!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

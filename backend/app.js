const express = require("express");
const bodyParser = require("body-parser");

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

app.listen(process.env.PORT, () => {
  console.log("Listening on port: " + process.env.PORT);
});

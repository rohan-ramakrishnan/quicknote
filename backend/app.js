const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.listen(process.env.PORT, () => {
  console.log("Listening on port: " + process.env.PORT);
});

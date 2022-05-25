const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:" +
    process.env.DB_PASSWORD +
    "@cluster0.iqeag.mongodb.net/?retryWrites=true&w=majority"
);

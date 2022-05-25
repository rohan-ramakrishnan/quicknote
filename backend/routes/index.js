const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.write("Hello World!");
});

module.exports = router;

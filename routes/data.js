const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const par = parseInt(req.query.number);
  if (par) {
    let sum = 0;
    sum = ((par + 1) * par) / 2;
    res.render("data", { sum });
  } else {
    res.render("data", { lack: "Lack of Parameter" });
  }
});

module.exports = router;

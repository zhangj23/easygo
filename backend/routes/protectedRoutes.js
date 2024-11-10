const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");

router.get("/profile", Auth, (req, res) => {
  res.json({ message: "You are authenticated" });
});

module.exports = router;

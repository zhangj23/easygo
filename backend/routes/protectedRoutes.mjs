import express from "express";
const router = express.Router();
import checkAuth from "../middleware/auth.mjs";

router.get("/home", checkAuth, (req, res) => {
  res.json({ message: "You are authenticated" });
});

export default router;

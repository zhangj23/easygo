import express from "express";
import "../loadEnvironment.mjs";

const router = express.Router();

router.get("/", async (req, res) => {});
router.get("/api/get-graph-key", (req, res) => {
  res.json({ GRAPH_KEY: process.env.GRAPH_KEY });
});

export default router;

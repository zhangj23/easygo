import express from "express";
import "../loadEnvironment.mjs";
import polyline from "polyline";
const key = process.env.GRAPH_KEY;
const router = express.Router();

router.get("/", async (req, res) => {});
router.get("/api/get-graph-key", (req, res) => {
  res.json({ GRAPH_KEY: process.env.GRAPH_KEY });
});
router.post("/api/route/wheelchair", async (req, res) => {
  try {
    const custom = {
      profile: "foot",
      points: [
        [req.body.startLon, req.body.startLat],
        [req.body.endLon, req.body.endLat],
      ],
      "ch.disable": true,
      custom_model: {
        priority: [
          {
            if: "road_class == STEPS",
            multiply_by: "0",
          },
        ],
      },
    };
    const response = await fetch(
      `https://graphhopper.com/api/1/route?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(custom),
      }
    );
    const data = await response.json();

    const encodedPoints = data.paths[0].points;
    const decodedPoints = polyline
      .decode(encodedPoints)
      .map(([lat, lon]) => [lat, lon]);
    console.log(decodedPoints);
    res.json({ route: decodedPoints }).status(200);
  } catch (error) {
    console.error("Error fetching route:", error);
    res.status(500).send(error);
  }
});
router.post("/api/route/normal", async (req, res) => {
  try {
    const url = `https://graphhopper.com/api/1/route?point=${req.body.startLat},${req.body.startLon}&point=${req.body.endLat},${req.body.endLon}&vehicle=foot&key=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const encodedPoints = data.paths[0].points;
    const decodedPoints = polyline
      .decode(encodedPoints)
      .map(([lat, lon]) => [lat, lon]);
    res.json({ route: decodedPoints }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/api/geocoder", async (req, res) => {
  try {
    const { lat, lon, q } = req.query;
    console.log(lat);
    console.log(lon);
    console.log(q);
    const url = `https://graphhopper.com/api/1/geocode?q=${q}&locale=en&key=${key}&point=${lat},${lon}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    res.json({ locations: data }).status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;

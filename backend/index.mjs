import express from "express";
import "./loadEnvironment.mjs";
import cors from "cors";
import osm from "./routes/osm.mjs";
import graph from "./routes/graph.mjs";
import auth from "./routes/auth.mjs";
import db from "./db.mjs";
import protectedRoutes from "./routes/protectedRoutes.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cors());

app.use(express.json());

app.use("/osm", osm);
app.use("/graph", graph);
app.use("/auth", auth);
app.use("/protect", protectedRoutes);
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

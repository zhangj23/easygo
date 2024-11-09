import express from "express";
import "./loadEnvironment.mjs";
import cors from "cors";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

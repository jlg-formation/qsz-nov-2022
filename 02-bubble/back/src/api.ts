import { Router } from "express";
import { getBubbles } from "./redis";

const app = Router();

app.get("/bubbles", (req, res) => {
  (async () => {
    const bubbles = await getBubbles();
    res.json(bubbles);
  })();
});

export const api = app;

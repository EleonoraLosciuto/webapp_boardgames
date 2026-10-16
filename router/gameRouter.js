import { index, show } from '../controller/gamesController.js';
import express from 'express';
const gameRouter = express.Router();

// index
gameRouter.get("/", index);

// show
gameRouter.get("/:id", show);

export default gameRouter;
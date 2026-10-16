import { index, show, create } from '../controller/gamesController.js';
import express from 'express';
const gameRouter = express.Router();

// index
gameRouter.get("/", index);

// show
gameRouter.get("/:id", show);

//create
gameRouter.post("/", create);

export default gameRouter;
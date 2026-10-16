import { index, show, create, update, destroy } from '../controller/gamesController.js';
import express from 'express';
const gameRouter = express.Router();

// index
gameRouter.get("/", index);

// show
gameRouter.get("/:id", show);

// create
gameRouter.post("/", create);

//update
gameRouter.put("/:id", update);

// destroy
gameRouter.delete("/:id", destroy);

export default gameRouter;
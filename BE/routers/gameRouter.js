import { index, show, create, update } from '../controllers/gamesController.js';
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


export default gameRouter;
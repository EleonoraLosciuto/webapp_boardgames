import { indexReviews, createReview } from '../controllers/reviewsController.js';
import express from 'express';
const reviewsRouter = express.Router({ mergeParams: true });

// index
reviewsRouter.get("/", indexReviews);

// create
reviewsRouter.post("/", createReview);


export default reviewsRouter;
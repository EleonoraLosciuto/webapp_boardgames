import { indexReviews, createReview, destroyReview } from '../controllers/reviewsController.js';
import express from 'express';
const reviewsRouter = express.Router({ mergeParams: true });

// index
reviewsRouter.get("/", indexReviews);

// create
reviewsRouter.post("/", createReview);

// destroy
reviewsRouter.delete("/:revId", destroyReview);

export default reviewsRouter;
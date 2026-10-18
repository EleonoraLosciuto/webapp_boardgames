import express from 'express';
import gameRouter from './routers/gameRouter.js';
import reviewsRouter from './routers/reviewsRouter.js';
import { notFound } from './middlewares.js';
import cors from 'cors';
import 'dotenv/config';


const app = express();
const port = 3000;

// cors
app.use(cors({
    origin: process.env.FE_ORIGIN
}));

// static assets
app.use(express.static("public"));

// body-parser
app.use(express.json());

// routing
// games
app.use('/boardgames', gameRouter);
// reviews
app.use('/boardgames/:id/reviews', reviewsRouter);

// Middleware: not found
app.use(notFound);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`
    );
})
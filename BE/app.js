import express from 'express';
import gameRouter from './routers/gameRouter.js';
import { notFound } from './middlewares.js';
import cors from 'cors';


const app = express();
const port = 3000;

// cors
app.use(cors({
    origin: 'http://localhost:5173'
}));

// static assets
app.use(express.static("public"));

// body-parser
app.use(express.json());

// routing
app.use('/boardgames', gameRouter);

// Middleware: not found
app.use(notFound);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`
    );
})
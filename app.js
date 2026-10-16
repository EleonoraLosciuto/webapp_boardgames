import express from 'express';
// import gamesRouter from 'routers/gamesRouter.js'


const app = express();
const port = 3000;

// static assets
app.use(express.static("public"));

// body-parser
app.use(express.json());

// routing
// app.use('/boardgames', gamesRouter);

// error handler
// app.use(errorHandler);

// page not found
// app.use(notFound);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`
    );
})
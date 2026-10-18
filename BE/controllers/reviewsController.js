import connection from '../data/db.js'

// index
export const indexReviews = async (req, res) => {
    try {
        // extract id
        const id = Number(req.params.id);

        // check id
        if (isNaN(id)) return res.status(400).json({ status: "bad request", message: "id must be a number" });

        // SQL query
        // reviews
        const reviewsSql = 'SELECT * from reviews r WHERE r.id_boardgame = ?'

        const [reviewsResults] = await connection.query(reviewsSql, [id]);

        res.json(reviewsResults);
    }
    catch (err) {
        console.error("Errore durante la fetch dei giochi", err);
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};



// create
export const createReview = async (req, res) => {
    try {

        // extract id;
        const id = Number(req.params.id);

        res.send(id);

        // extract request body
        const { feedback, rating } = req.body;
        let username = req.body.username;
        const numRating = Number(rating);

        // validations on request body data
        if (!rating) return res.status(400).json({ status: "bad request", message: "review is empty, incomplete or invalid" });
        if (numRating < 0 || numRating > 5) return res.status(400).json({ status: "bad request", message: "rating must be between 0 and 5" });

        // if user is anonymous
        if (!username) (username = "anonymous");

        //SQL query
        const sql = 'INSERT INTO reviews (username, feedback, rating, id_boardgame) VALUES (?, ?, ?, ?)'

        // connection query
        const [results] = await connection.query(sql, [username, feedback, rating, id]);
        console.log(results);
    }
    catch (err) {
        console.error("Errore durante la fetch delle review", err);
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};


import connection from '../data/db.js'

// index
export const index = async (req, res) => {
    try {
        // SQL query
        let sql = 'SELECT * FROM boardgames WHERE 1=1';

        // connection query
        const [results] = await connection.query(sql);
        res.json(results);
    }
    catch {
        console.error("Errore durante la fetch dei giochi");
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};

// show
export const show = async (req, res) => {
    try {
        // extract id
        const id = Number(req.params.id);

        // check id
        if (isNaN(id)) return res.status(400).json({ status: "bad request", message: "id must be a number" });

        // SQL query
        const gameSql = `SELECT b.*, 
        ROUND(AVG(r.rating)) AS avg_rating 
        FROM boardgames b 
        LEFT JOIN reviews r ON r.id_boardgame = b.id
        WHERE b.id = ?
        GROUP BY b.id` ;

        // connection query
        // game
        const [gameResult] = await connection.query(gameSql, [id]);

        // check on game result
        // note: left join always return one record even if all columns are null
        if (!gameResult || gameResult[0].id == null) return res.status(404).json({ status: "not found", message: "game not found" })

        // extraction of result from game query
        const [game] = gameResult;

        // reviews
        const reviewsSql = 'SELECT * from reviews r WHERE r.id_boardgame = ?'

        const [reviewsResults] = await connection.query(reviewsSql, [id]);
        game.reviews = reviewsResults;

        res.json(game);
    }
    catch {
        console.error("Errore durante la fetch dei giochi");
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};

// create
export const create = async (req, res) => {
    try {
        // extract request body
        const { name, description, image } = req.body;

        // check if request is legit
        if (!name || !description || !image) return res.status(400).json({ status: "bad request", message: "request body is empty, incomplete or invalid" });

        //SQL query
        const sql = 'INSERT INTO boardgames (name, description, image) VALUES (?, ?, ?)'

        // connection query
        const [results] = await connection.query(sql, [name, description, image]);
        console.log(results);

        res.json({
            id: results.insertId,
            name,
            description,
            image
        })
    }
    catch {
        console.error("Errore durante la fetch dei giochi");
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};

// update
export const update = async (req, res) => {
    try {
        // extract id
        const id = Number(req.params.id);

        // check id
        if (isNaN(id)) return res.status(400).json({ status: "bad request", message: "id must be a number" });

        // extract req body
        const { name, description, image } = req.body;

        // check req body
        if (!name || !description || !image) return res.status(400).json({ status: "bad request", message: "request body is empty, incomplete or invalid" });

        // SQL query
        const sql = 'UPDATE boardgames SET name = ?, description = ?, image = ? WHERE id = ?';

        // connection query
        const [results] = await connection.query(sql, [name, description, image, id]);

        if (results.affectedRows === 0) return res.status(404).json({ status: "not found", message: "not found: sql query was not completed" });

        res.json({
            id,
            name,
            description,
            image
        })
    }
    catch {
        console.error("Errore durante la fetch dei giochi");
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};

// destroy
export const destroy = async (req, res) => {
    try {
        // extract id
        const id = Number(req.params.id);

        // check id
        if (isNaN(id)) return res.status(400).json({ status: "bad request", message: "id must be a number" });

        // SQL query
        const sql = 'DELETE FROM boardgames WHERE id = ?'

        // connection query
        const [results] = await connection.query(sql, [id]);
        console.log(results);

        if (results.affectedRows === 0) return res.status(400).json({ status: "not found", message: "not found: sql query was not completed" });

        res.sendStatus(200);
    }
    catch {
        console.error("Errore durante la fetch dei giochi");
        res.status(500).json({ status: "server error", message: "internal server error" });
    }
};
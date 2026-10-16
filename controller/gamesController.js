import connection from '../data/db.js'

// index
export const index = async (req, res) => {
    // SQL query
    let sql = 'SELECT * FROM boardgames WHERE 1=1';

    // connection query
    const [results] = await connection.query(sql);
    res.json(results);
};

// show
export const show = async (req, res) => {
    // extract ID
    const id = Number(req.params.id);

    // check id
    if (isNaN(id)) return res.status(400).json({ status: "bad request", message: "id must be a number" });

    // SQL query
    let sql = 'SELECT * FROM boardgames WHERE id = ?';

    // connection query
    const [result] = await connection.query(sql, [id]);

    // check if id exists
    if (result.length === 0) return res.status(404).json({ status: "not found", message: "id not found" });

    res.json(result);
};

// create
export const create = async (req, res) => {
    // extract request body
    const { name, description, image } = req.body;

    // check if request is legit
    if (!name || !description || !image) return res.status(400).json({ status: "bad request", message: "request body is empty or invalid" });

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
};

// update


// destroy
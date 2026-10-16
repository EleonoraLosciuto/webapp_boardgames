import connection from 'data/db.js'

// index
export const index = async (req, res) => {
    // SQL query
    let sql = 'SELECT * FROM boardgames WHERE 1=1';

    // connection query
    const [results] = await connection.query(sql);
    res.json(results);
}

// show
export const show = async (req, res) => {
    // estrazione ID
    const id = Number(req.params.id);
    // SQL query
    let sql = 'SELECT * FROM boardgames WHERE id = ?'

    // connection query
    const [result] = await connection.query(sql, [id]);
    res.json(result);

}
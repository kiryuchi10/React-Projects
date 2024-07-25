const express = require('express');
const { getConnection, closeConnection } = require('./db');
const router = express.Router();

// Route to get data
router.get('/data', async (req, res) => {
  let connection;

  try {
    connection = await getConnection();
    const result = await connection.execute('SELECT * FROM book_order ORDER BY orderdate');
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).send('Error querying database');
  } finally {
    await closeConnection(connection);
  }
});

module.exports = router;

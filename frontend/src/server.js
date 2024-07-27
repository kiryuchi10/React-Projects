const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv
const oracledb = require('oracledb');

dotenv.config(); // Load .env file

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Oracle DB configuration
const dbConfig = {
  user: process.env.DB_USER || 'project2',
  password: process.env.DB_PASSWORD || 'project2',
  connectString: process.env.DB_CONNECT_STRING || 'localhost:1521/xe',
};

// Example route for testing connection
app.get('/test-db', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    res.send('Database connection successful!');
    await connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection failed');
  }
});

// Routes and other server code...

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

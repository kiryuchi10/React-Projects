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
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
};

// Routes and other server code...

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

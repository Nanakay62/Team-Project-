// Import dependencies
const express = require('express');
const connectDB = require('./config/database');

// Create an instance of Express
const app = express();

// Define a test route
app.get('/', (req, res) => {
  res.send('Recipe Manager API is running!');
});

// Set the server to listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
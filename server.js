// Import dependencies
const express = require('express');
const connectDB = require('./config/database');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// Create an instance of Express
const app = express();

// Define a test route
app.get('/', (req, res) => {
  res.send('Recipe Manager API is running!');
});

// Configure session middleware
app.use(
  session({
    secret: 'YOUR_SESSION_SECRET',
    resave: false,
    saveUninitialized: false,
  })
);

// Configure Swagger UI Express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configure Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.use('/auth', authRoutes);

// Set the server to listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Establish database connection
connectDB();
const express = require('express'); // Import Express
const app = express(); // Create the Express app
const PORT = 3000; // Server will run on port 3000
const rateLimit = require('express-rate-limit');

app.use(express.json()); // Allows us to receive JSON data in req.body

const auditLogger = require('./middleware/audit/auditLogger');
app.use(auditLogger);

const userRoute = require('./route/user'); // Import user routes
const analyticsRoute = require('./route/analytics'); // Import analytics routes
const { isValid, checkUserAgent } = require("./middleware/user"); // Import middleware

const cors = require('cors');


// Middleware
app.use(checkUserAgent); // Runs for every incoming request
app.use(cors());
const rateLimiter = rateLimit({
    windowMs: 1 * 1000,
    max: 1,
    message: {
        message: 'Too many request from this IP, please try again in 30 seconds'
    }
});

// User routes
app.use('/api/users', rateLimiter, isValid, userRoute);

// Analytics routes
app.use('/api/analytics', rateLimiter, isValid, analyticsRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
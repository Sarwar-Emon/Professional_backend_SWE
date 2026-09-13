require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = 3000;

const githubRoute = require('./route/github');
app.use('/api/github', githubRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
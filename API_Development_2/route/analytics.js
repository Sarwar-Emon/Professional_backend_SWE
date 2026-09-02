const express = require('express');
const router = express.Router();

const analyzeUserAgents = require('../utils/analyzeUserAgents');

router.get('/user-agents', (req, res) => {
    res.json(analyzeUserAgents());
});

module.exports = router;
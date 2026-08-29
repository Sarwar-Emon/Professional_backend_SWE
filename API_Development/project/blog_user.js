const express = require('express');
const router = express.Router();

class BlogInfo {
    constructor({ title, content, author }) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

// GET
router.get('/users/:id', (req, res) => {
    const blogId = req.params.id;
    const filter = req.query.filter;

    res.send(`Blog Id: ${blogId}, Filter: ${filter}`);
});

// POST
router.post('/users', (req, res) => {

    if (!req.body) {
        return res.status(400).json({
            message: 'Request body is required'
        });
    }

    const blog = new BlogInfo(req.body);

    if (!blog.title || !blog.content || !blog.author) {
        return res.status(400).json({
            message: 'Please fill up all fields'
        });
    }

    if (typeof blog.content !== 'string' || blog.content.length < 10) {
        return res.status(400).json({
            message: 'Content must be at least 10 characters long'
        });
    }

    if (typeof blog.title !== 'string' || blog.title.length < 3) {
        return res.status(400).json({
            message: 'Title must be at least 3 characters long'
        });
    }

    res.status(201).json({
        message: 'Blog created successfully',
        blog: blog
    });
});

module.exports = router;
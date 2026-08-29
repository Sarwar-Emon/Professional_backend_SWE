const express = require('express');
const router = express.Router();
const Joi = require('joi');


// OOP
class UserInfo {
    constructor({ name, age, location }) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}


// GET
router.get('/user/:id', (req, res) => {

    const userId = req.params.id;
    const filter = req.query.filter;

    res.send(`User Id: ${userId}, Filter: ${filter}`);
});


// VERSION 1 → Manual Validation
router.post('/users', (req, res) => {

    // First check if body exists
    if (!req.body) {
        return res.status(400).json({
            message: 'Request body is required'
        });
    }

    const user = new UserInfo(req.body);

    // Check required fields
    if (!user.name || !user.age || !user.location) {
        return res.status(400).json({
            message: 'Please fill up all fields'
        });
    }

    // Check age type
    if (typeof user.age !== 'number') {
        return res.status(400).json({
            message: 'Age must be a number'
        });
    }

    res.status(201).json({
        message: 'User created successfully',
        user: user
    });
});


// Joi Schema
const userSchema = Joi.object({

    name: Joi.string().required(),

    age: Joi.number()
        .integer()
        .positive()
        .required(),

    location: Joi.string().required()

});


// VERSION 2 → Joi Validation
router.post('/users/v2', (req, res) => {

    // Check if body exists
    if (!req.body) {
        return res.status(400).json({
            message: 'Request body is required'
        });
    }

    // Validate client data
    const { error, value } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    // Create user only after validation
    const user = new UserInfo(value);

    res.status(201).json({
        message: 'User created successfully',
        user: user
    });
});


module.exports = router;
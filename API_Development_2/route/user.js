const express = require('express'); // Import Express

const router = express.Router(); // Create a router


// Import controller functions
const {
    getAllUsers,
    deleteUser,
    updateUser
} = require('../controler/userController');


// GET /api/users → Get all users
router.get('/', getAllUsers);

// DELETE /api/users/:id → Delete a user
router.delete('/:id', deleteUser);

// PUT /api/users/:id → Update a user
router.put('/:id', updateUser);


// Export router so app.js can use it
module.exports = router;
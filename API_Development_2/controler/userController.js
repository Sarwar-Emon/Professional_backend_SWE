// Temporary user data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];


// Get all users
const getAllUsers = (req, res) => {
  res.json(users); // Send users as JSON response
};


// Delete a user
const deleteUser = (req, res) => {
  res.json({
      message: 'Delete user logic goes here',
      users
  }); // For now, just sends a message
};


// Update a user
const updateUser = (req, res) => {
  res.json({
      message: 'Update user logic goes here',
      users
  }); // For now, just sends a message
};


// Export functions so the router can use them
module.exports = {
  getAllUsers,
  deleteUser,
  updateUser
};
const User = require('../model/userModel')

function register(userData) {
    return User.create(userData);
};




module.exports = {
    register,
}
const User = require('../models/User');
const bcrypt = require('bcrypt')

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

exports.addUser = (username, password) => User.create({ username, password });

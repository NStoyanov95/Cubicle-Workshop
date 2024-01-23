const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '..', 'static')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth)
}
 
module.exports = expressConfigurator;



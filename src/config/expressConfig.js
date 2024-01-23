const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '..', 'static')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
}

module.exports = expressConfigurator;



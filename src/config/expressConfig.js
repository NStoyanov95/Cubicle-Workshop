const path = require('path');
const express = require('express');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '../static')));
}

module.exports = expressConfigurator;
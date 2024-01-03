const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');

const app = express();

const PORT = 3030;

//Express config
expressConfigurator(app);

//Handlebars config
handlebarsConfigurator(app)

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
const express = require('express');
const handlebars = require('express-handlebars');


const app = express();

const PORT = 3030;

//Express config
app.use(express.static('src/static'));

//Handlebars config

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

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
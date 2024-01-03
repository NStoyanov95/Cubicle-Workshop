const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();

const PORT = 3030;

expressConfigurator(app);
handlebarsConfigurator(app);

app.use(homeController);
app.use(cubeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
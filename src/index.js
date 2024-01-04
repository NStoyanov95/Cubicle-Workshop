const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');
const routes = require('./routes');

const app = express();

const PORT = 3030;

expressConfigurator(app);
handlebarsConfigurator(app);
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
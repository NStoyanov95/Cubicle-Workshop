const express = require('express');
const dbConnect = require('./config/dbConfig');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');
const routes = require('./routes');

const app = express();

const PORT = 3030;

expressConfigurator(app);
handlebarsConfigurator(app);

dbConnect()
    .then(()=>{console.log('DB connected!')})
    .catch(err => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
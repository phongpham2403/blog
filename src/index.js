const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

// HTTP logger
app.use(morgan('combined'));

// Teamplate engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set                        (
    'view engine',

    'hbs',
);
app.set(
    'views',

    path.join(                         __dirname, 'resources\\views'),
);

// Routes init
route(                 app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

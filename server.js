require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const { Destination } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('tiny'));

app.use('/', require('./controllers/'));

sequelize.sync({ force: false }).then(() => app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}/`)));
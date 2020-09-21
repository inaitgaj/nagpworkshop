const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./config/passport');

const auth = require('./middlewares/auth');

const authRouter = require('./routes/auth');
const coursesRouter = require('./routes/courses');

const db = require('./database/db');
db.connectToDatabase(process.env.DB_URL);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/courses', auth.isAuthenticated(), coursesRouter);

module.exports = app;

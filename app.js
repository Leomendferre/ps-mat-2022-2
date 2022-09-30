require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//conecta ao DB
require('./config/db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const aluno =require('./routes/aluno')
app.use('/aluno', aluno)

const professor =require('./routes/professor')
app.use('/professor', professor)

const usuario =require('./routes/usuario')
app.use('/usuario', usuario)

const curso = require('./routes/curso')
app.use('/curso', curso)

module.exports = app;

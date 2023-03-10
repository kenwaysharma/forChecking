require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path');
var orderRouter = require('./routes/orderRouter')
var serviceRouter = require('./routes/serviceRouter')
var userRouter = require('./routes/userRouter')
var app = express();
// view engine setup
app.use(cookieParser())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRouter);
app.use('/service', serviceRouter);
app.use('/order', orderRouter);
module.exports = app;
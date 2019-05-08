var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var brandsRouter = require('./routes/brands');
var categoriesRouter = require('./routes/categories');
var clothesRouter = require('./routes/clothes');
var colorsRouter = require('./routes/colors');
var featuresRouter = require('./routes/features');
var notesRouter = require('./routes/notes');
var occasionsRouter = require('./routes/occasions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//paramétrage permettant d'éviter l'erreur CORS lorsque Angular tente d'accéder à NodeJs
app.use(function(req, res, next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
   next();
});

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/clothes', clothesRouter);
app.use('/api/colors', colorsRouter);
app.use('/api/features', featuresRouter);
app.use('/api/notes', notesRouter);
app.use('/api/occasions', occasionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

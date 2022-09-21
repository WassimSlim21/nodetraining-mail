var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

const sendEmail = require("./config/sendmail");
var express = require('express');

var app = express();


/* CORS Setup*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  
  next();
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'public');

require("dotenv").config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
 // GET method route
 app.get('/', function (req, res, next) {
  res.send('GET request to the homepage');
})



// POST method route 
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
})


//Middleware function to log request protocol
app.use('/things', function(req, res, next){
  console.log("A request for things received at " + Date.now());
  next();
});


// Route handler that sends the response
app.get('/things', function(req, res, next){
  console.log("A request for things Handler at " + Date.now());
  next()
  // res.send('Things');
});

app.get('/things', function(req, res, next){
  console.log("A request for things 2 Handler at " + Date.now());
  res.send('Things 2');
});

app.use('/users', usersRouter);
app.use('/products', productRouter);

app.post('/email', async(req, res)=>{
try{
  console.log("Sending mail ...");
  await sendEmail(req.body.email, req.body.subject,req.body.content);
  res.status(200).json({ msg: "password reset link sent to your email account" });
}

    catch (error) {
        res.status(500).json({ err: "An error occured" });
        console.log(error);
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("into error handler");
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // console.log(err);
  res.render('error');
});

module.exports = app;

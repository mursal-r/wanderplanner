const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


require('dotenv').config();

// connect to mongo db
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));


app.use('/api/users', require('./routes/api/users'));
app.use('/api/search',require('./routes/api/search'));
app.use('/api/booking', require('./routes/api/bookings'));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
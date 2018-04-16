const express = require('express');
const app = express();
const margan = require('morgan');
const bodyParser = require('body-parser');
const user = require('./api/user');

if(process.env.NODE_ENV !== 'test') {
  app.use(margan('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', user);

module.exports = app;
const express = require('express');
const app = express();
const margan = require('morgan');
const bodyParser = require('body-parser');
const user = require('./api/user');

app.use(margan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', user);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
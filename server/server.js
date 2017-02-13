const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

//we can customize the status for your response
app.get('/bad', (req, res) => {
  res.status(404).send({
    error: 'Page not found!',
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Kevin',
    age: 29,
  }, {
    name: 'Curry',
    age: 28,
  }, {
    name: 'Federer',
    age: 35,
  }]);
});

app.listen(3000);

module.exports.app = app;

const express = require('express');
const Cup = require('./cup/Cup');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  Cup.find()
    .then((cups) => {
      res.status(200).send(cups);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

app.listen(3000, () => {
  console.log(`hello cup from port 3000`);
});

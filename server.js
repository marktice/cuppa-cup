const express = require('express');
const bodyParser = require('body-parser');

const Cup = require('./cup/Cup');

const app = express();

// ENABLE CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

// CUP ROUTES
app.get('/', (req, res) => {
  Cup.find()
    .then((cups) => {
      res.status(200).send(cups);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

app.post('/', (req, res) => {
  const cup = new Cup(req.body);
  cup.save()
    .then((cup) => {
      res.status(200).send(cup);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  Cup.findById(id)
    .then((cup) => {
      res.status(200).send(cup);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  Cup.findByIdAndRemove(id)
    .then((cup) => {
      res.status(200).send(cup);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

// SERVER
app.listen(3000, () => {
  console.log(`hello cup from port 3000`);
});

const express = require('express');

const app = express();

const cupExample = require('./cup-example.json');

app.get('/', (req, res) => {
  res.status(200).send(cupExample);
});

app.listen(3000, () => {
  console.log(`hello cup from port 3000`);
});

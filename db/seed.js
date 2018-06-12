const mongoose = require('../db/mongoose');
const Cup = require('./../cup/Cup');

const newCup = new Cup({
  color: 'red',
  material: 'bamboo'
});

newCup.save()
  .then((cup) => {
    console.log(`Saved cup ${cup}`);
  }).catch((err) => {
    console.log('Unable to save cup', err);
  });

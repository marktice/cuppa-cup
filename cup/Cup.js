const mongoose = require('../db/mongoose');

const Schema = mongoose.Schema;

const Cup = new Schema({
  color: String,
  material: String
});

module.exports = { Cup };

const mongoose = require('../db/mongoose');

const cupSchema = new mongoose.Schema({
  color: String,
  material: String
});

const cupModel = mongoose.model('Cup', cupSchema);

module.exports = cupModel;

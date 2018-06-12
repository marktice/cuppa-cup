const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CuppaCup');

module.exports = { mongoose };

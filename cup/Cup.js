const mongoose = require('../db/mongoose');

const cupSchema = new mongoose.Schema({
  color: String,
  material: String,
  accessories: {
    tassels: Boolean,
    pomPoms: Boolean,
    knitedCupSweater: Boolean,
    chimes: Boolean,
    charms: Boolean,
    bluetoothSpeakers: Boolean  
  }
});

const cupModel = mongoose.model('Cup', cupSchema);

module.exports = cupModel;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CuppaCup');

const connection = mongoose.connection
connection.on('connected', () => {
    console.log('established connection to mongodb');
});

module.exports = mongoose;

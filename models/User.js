var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String
});

exports.User = mongoose.model('User', schema);
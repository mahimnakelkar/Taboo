var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    score   : Number,
    username: String,
    password: String,
    team    : String
});

module.exports = mongoose.model('User', UserSchema);

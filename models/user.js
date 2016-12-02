var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name    : String,
    score   : Number,
    username: String,
    password: String,
    email   : String,
    team    : { type: Schema.Types.ObjectId, ref: 'Team' }
});

module.exports = mongoose.model('User', UserSchema);

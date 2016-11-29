var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    score   : Number,
    username: String,
    password: String,
    team    : { type: Schema.Types.ObjectId, ref: 'Team' }
});

module.exports = mongoose.model('User', UserSchema);

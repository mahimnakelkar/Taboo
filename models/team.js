var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    users   : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    score   : Number,
    name    : String,
    cards   : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    color   : String
});

module.exports = mongoose.model('Team', TeamSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    users   : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    lon     : Number,
    answer  : String,
    cards   : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

module.exports = mongoose.model('Team', TeamSchema);

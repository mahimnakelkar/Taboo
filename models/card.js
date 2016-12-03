var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
    lat     : Number,
    lon     : Number,
    answer  : String,
    hints   : [String],
    color   : String,
    active  : Boolean
});

module.exports = mongoose.model('Card', CardSchema);

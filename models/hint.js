var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HintSchema = new Schema({
    text    : String
});

module.exports = mongoose.model("Hint", HintSchema);

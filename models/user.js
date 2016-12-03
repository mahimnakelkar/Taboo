var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name    : String,
    score   : Number,
    username: String,
    password: String,
    email   : String,
    team    : { type: Schema.Types.ObjectId, ref: 'Team' }
});

UserSchema.methods.generateHash = function(password) {
    // return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return password;
}

UserSchema.methods.validPassword = function(password) {
    // return bcrypt.compareSync(password, this.password);
    return password;
}

module.exports = mongoose.model('User', UserSchema);

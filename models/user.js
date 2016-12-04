var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name    : String,
    score   : Number,
    username: String,
    password: String,
    email   : String,
    team    : String
});

UserSchema.methods.generateHash = function(password) {
    // return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return password;
}

UserSchema.methods.validPassword = function(password) {
    // return bcrypt.compareSync(password, this.password);
    return (password == this.password);
}

module.exports = mongoose.model('User', UserSchema);

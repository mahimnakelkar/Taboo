var mongoose    = require('mongoose');
var db          = mongoose.connection;

var models = ['team.js', 'user.js', 'card.js'];


module.exports = function() {

    mongoose.connect('mongodb://root:password@ds111788.mlab.com:11788/taboo');

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {

        console.log('connected to the database');

    });

    var l = models.length;
    for (var i = 0; i < l; i++) {
        require('./' + models[i]);
    }
};

var TeamRoute   = require('./routes/team.js');
var UserRoute   = require('./routes/user.js');
var CardRoute   = require('./routes/card.js');

var cfenv       = require('cfenv');

var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var passport    = require('passport');
var flash       = require('connect-flash');
var session     = require('express-session');

var express     = require('express');
var mongoose    = require('mongoose');
var app         = express();
var appEnv      = cfenv.getAppEnv();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session({ secret : 'taboo'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));

require('./config/passport')(passport);
require('./models/models')();

app.use('/api/team', TeamRoute);
app.use('/api/user', UserRoute);
app.use('/api/card', CardRoute);

app.get('/success', function(req, res, err) {
    res.json({ "status" : true });
});

app.get('/error', function(req, res, err) {
    res.json({ "status" : false });
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/success',
    failureRedirect: '/error'
}));

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/success',
    failureRedirect : '/error'
}));

app.listen(appEnv.port, '0.0.0.0', function() {
    console.log("server starting on " + appEnv.url);
});

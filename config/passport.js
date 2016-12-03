var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy(
        function(username, password, done) {
            process.nextTick(function() {
                User.findOne( {'username' : username }, function(err, user) {
                    if (err) return done(err);

                    if (user) return done(null, false)

                    else {
                        var newuser = new User();

                        newuser.username = username;
                        newuser.password = newuser.generateHash(password);
                        newuser.save(function(err) {
                            if (err) throw err;

                            return done(null, newuser);
                        });
                    }
                });
            });
        }
    ));

    passport.use('local-login', new LocalStrategy(
        function(username, password, done) {
            User.findOne({ "username" : username }, function(err, user) {
                if (err) return done (err);

                if (!user) return done(null, false);

                if (!user.validPassword(password)) return done(null, false);

                return done(null, user);
            });
        }
    ));
}


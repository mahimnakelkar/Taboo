var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res) {
    console.log('user api hit');
    console.log(req.query);

    if ( req.query && req.query['score'] || req.query['username'] || req.query['team'] )
    {
        //
        console.log('looking');
        //
        User.find( req.query, function (err, users) {

            if (err) return res.send().status(500);

            res.send(users).status(200);
        });
    }
    else
    {
        User.find({}, function(err, users) {

            if (err) return res.send().status(500);

            res.send(users).status(200);
        });
    }
});

router.post('/', function(req,res) {

    console.log('newuser post');

    var newuser = new User(req.body);

    newuser.save(function(err, user) {

        if (err) return res.send().status(500);

        res.send().status(200);
    });

});

module.exports = router;

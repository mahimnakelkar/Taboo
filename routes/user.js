var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res) {
    console.log(req.query);

    User.find({}, function(err, users) {
        console.log('ii');
        res.send(users);
    });
});

router.post('/', function(req,res) {

    var newuser = new User(req.body);

    newuser.save(function(err, user) {

        if (err) return res.send().status(500);

        res.send().status(200);
    });

});

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res) {
    console.log(req.query);

    if ( req.query && req.query['score'] || req.query['username'] || req.query['team'] || req.query['_id'] )
    {
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

    if ( '_id' in req.body)
    {
        User.findOne({"_id": req.body["_id"] }, function(err, user) {
            user.update(req.body, function(err, myuser) {
                if (err) return res.send().status(500);

                res.send(myuser).status(500);
            });
        });
    }
    else
    {
        var newuser = new User(req.body);

        newuser.save(function(err, user) {

            if (err) return res.send().status(500);

            res.send().status(200);
        });
    }


});

router.delete('/', function(req,res) {
    console.log(req.query);

    if ( req.query && req.query['score'] || req.query['username'] || req.query['team'] || req.query['_id'] )
    {
        User.find(req.query).remove().exec();
        res.send().status(200);
    }
    else
    {
        User.find({}).remove().exec();
        res.send().status(200);
    }

});
module.exports = router;

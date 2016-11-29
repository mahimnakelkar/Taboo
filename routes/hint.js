var express = require('express');
var router = express.Router;
var Hint = require('../models/hint.js');

router.get('/', function(req, res) {

    if (req.query && 'text' in req.query)
    {
        Hint.find(req.query, function(err, hints) {

            if (err) return res.send().status(500);

            res.send(hints).status(200);
        });
    }
    else
    {
        Hint.find({}, function(err, hints) {

            if (err) return res.send().status(500);
            res.send(hints).status(200);
        }
    }
});

router.post('/', function(req, res) {
    var newhint = new Hint(req.body);

    newhint.save(function(err, user) {

        if (err) return res.send().status(500);

        res.send().status(200);

    });

});

module.exports = router;

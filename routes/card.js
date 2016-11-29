var express = require('express');
var router = express.Router;
var Card = require('../models/card.js');

router.get('/', function(req, res) {

    if (req.query && 'lat' in req.query || 'lon' in req.query || 'answer' in req.query || 'hints' in req.query || 'color' in req.query)
    {
        Card.find(req.query, function(err, cards) {

            if (err) return res.send().status(500);

            res.send(cards).status(200);
        });
    }
    else
    {
        Card.find({}, function(err, cards) {

            if (err) return res.send().status(500);
            res.send(cards).status(200);
        }
    }
});

router.post('/', function(req, res) {
    var newcard = new Card(req.body);

    newcard.save(function(err, user) {

        if (err) return res.send().status(500);

        res.send().status(200);

    });

});

module.exports = router;

var express = require('express');
var router = express.Router();
var Card = require('../models/card.js');

router.get('/', function(req, res) {
    console.log('query: ');
    console.log(req.query);

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
        });
    }
});

router.post('/', function(req, res) {

    console.log('post card');
    console.log(req.body);
    var newcard = new Card(req.body);

    console.log(newcard);

    newcard.save(function(err, user) {

        if (err) return res.send().status(500);

        res.send().status(200);

    });

});

module.exports = router;

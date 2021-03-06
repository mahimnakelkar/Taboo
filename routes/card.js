var express = require('express');
var router = express.Router();
var Card = require('../models/card.js');

router.get('/', function(req, res) {

    if (req.query && 'lat' in req.query || 'lon' in req.query || 'answer' in req.query || 'hints' in req.query || 'color' in req.query || '_id' in req.query || 'team' in req.query || 'active' in req.query)
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

    var newcard = new Card(req.body);

    req.query = req.body;

    if (req.query && 'lat' in req.query || 'lon' in req.query || 'answer' in req.query || 'hints' in req.query || 'color' in req.query || '_id' in req.query || 'active' in req.query || 'team' in req.query)
    {
        Card.findOne({"_id" : req.query['_id'] }, function(err, card) {
            if (!card) {
                newcard.save(function(err, card) {

                    if (err) return res.send().status(500);

                    res.send().status(200);

                });
            }
            else {
                card.update(req.query, function(err, card) {
                    if (err) return res.send().status(500);

                    res.send().status(200);
                });
            }
        });
    }
});

router.delete('/', function(req, res) {
    console.log(req.query);

    if (req.query && 'lat' in req.query || 'lon' in req.query || 'answer' in req.query || 'hints' in req.query || 'color' in req.query || '_id' in req.query)
    {
        Card.find(req.query).remove().exec();
        res.send().status(200);
    }
    else
    {
        Card.find({}).remove().exec();
        res.send().status(200);
    }
});
module.exports = router;

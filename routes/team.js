var express = require('express');
var router = express.Router();
var Team = require('../models/team.js');

router.get('/', function(req, res) {
    console.log(req.query);

    if ( req.query && 'users' in req.query || 'score' in req.query || 'cards' in req.query ||
'name' in req.query || 'color' in req.query || '_id' in req.query)
    {
        Team.find(req.query, function(err, teams) {

            if (err) return res.send().status(500);

            res.send(teams).status(200);
        });
    }
    else
    {
        Team.find({}, function(err, teams) {

            if (err) return res.send().status(500);

            res.send(teams);
        });
    }

});

router.post('/', function(req, res) {

    var newteam = new Team(req.body);

    newteam.save(function(err, team) {

        if (err) return res.send().status(500);
    });
});

router.delete('/', function(req, res) {

    console.log(req.query);

    if ( req.query && 'users' in req.query || 'score' in req.query || 'cards' in req.query ||
'name' in req.query || 'color' in req.query || '_id' in req.query)
    {
        Team.find(req.query).remove().exec();
        res.send(teams).status(200);
    }
    else
    {
        Team.find({}).remove().exec();
        res.send(teams).status(200);
    }

});

module.exports = router;

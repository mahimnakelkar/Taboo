var express = require('express');
var router = express.Router;

router.get('/api/team', function(req, res) {
    console.log(req.query);
});

module.exports = router;

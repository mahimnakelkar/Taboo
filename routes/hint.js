var express = require('express');
var router = express.Router;

router.get('/api/hint', function(req, res) {
    console.log(req.query);
});

module.exports = router;

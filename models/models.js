var models = ['team.js', 'user.js', 'card.js', 'hint.js'];
module.exports = function() {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require('./' + models[i]);
    }
};

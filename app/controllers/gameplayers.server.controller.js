var GamePlayer = require('mongoose').model('GamePlayer');

exports.create = function(req, res, next) {
    var gamePlayer = new GamePlayer(req.body);
    gamePlayer.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(gamePlayer);
        }
    });
};

exports.list = function(req, res, next) {
    GamePlayer.find({}, function(err, gamePlayer) {
        if (err) {
            return next(err);
        }
        else {
            res.json(gamePlayer);
        }
    });
};
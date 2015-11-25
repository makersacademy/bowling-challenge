var PinsBowled = require('mongoose').model('PinsBowled');

exports.create = function(req, res, next) {
    var pinsBowled = new PinsBowled(req.body);
    pinsBowled.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(pinsBowled);
        }
    });
};

exports.list = function(req, res, next) {
    PinsBowled.find({}, function(err, pinsBowled) {
        if (err) {
            return next(err);
        }
        else {
            res.json(pinsBowled);
        }
    });
};
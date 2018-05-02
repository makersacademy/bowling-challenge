const url = require('url'),
      gameRecord = require('../models/gameRecord');

exports.create_game_record = function(req, res){
  gameRecord.create({score: req.body.score, user_id: req.session.userId});
  res.redirect('/');
};

exports.all = function(req, res) {
  gameRecord.find({user_id: req.session.userId}, function(err, userRecords) {
    if(err) {
      res.redirect('/');
    } else {
      let stats = userRecords.reduce((prev, rec) => ({min: Math.min(prev.min, rec.score), max: Math.max(prev.max, rec.score), sum: prev.sum + rec.score}), {min: Infinity, max: 0, sum: 0});
      res.render('gamerecords', { ...stats, records: userRecords });
    };
  });
};

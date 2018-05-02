const gameRecord = require('../models/gameRecord');

exports.create_game_record = function(req, res){
  gameRecord.create({score: req.body.score, user_id: req.session.userId});
  res.redirect('/');
};

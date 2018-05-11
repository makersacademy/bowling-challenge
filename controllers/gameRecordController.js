const url = require('url'),
      moment = require('moment'),
      gameRecord = require('../models/gameRecord');

exports.create_game_record = (req, res) => {
  gameRecord.create({score: req.body.score, user_id: req.userId}, (err, record) => {
    if(err) res.redirect(500, '/'); 
    res.redirect(200, '/');
  });
}

exports.all = (req, res) =>{
  gameRecord.find({user_id: req.userId}, function(err, userRecords) {
    if(err) {
      return res.status(500).send("There was a problem finding the records.");
    };
    let stats = userRecords.reduce((prev, rec) => ({min: Math.min(prev.min, rec.score), max: Math.max(prev.max, rec.score), sum: prev.sum + rec.score}), {min: Infinity, max: 0, sum: 0});
    stats.average = (stats.sum/userRecords.length).toFixed(2);
    userRecords = userRecords.map(rec => ({ score: rec.score, date: moment(rec.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}));
    return res.status(200).send({ ...stats, records: userRecords});
  });
};

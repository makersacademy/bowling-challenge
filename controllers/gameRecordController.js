const url = require('url'),
      moment = require('moment'),
      gameRecord = require('../models/gameRecord');

exports.create_game_record = (req, res) => {
  gameRecord.create({ score: req.body.score, user_id: req.userId }, (err, record) => {
    if(err) res.redirect(500, '/'); 
    res.redirect(200, '/');
  });
}

exports.all = (req, res) =>{
  gameRecord.find({ user_id: req.userId }, function(err, userRecords) {
    if(err) {
      return res.status(500).send("There was a problem finding the records.");
    };
    const stats = getStats(userRecords);
    stats.average = (stats.sum/userRecords.length).toFixed(2);
    userRecords = prettyDate(userRecords);
    return res.status(200).send({ ...stats, records: userRecords });
  });
};

// get sum of user's scores as well as highest and lowest score
const getStats = recs => recs.reduce((prev, rec) => (
  { min: Math.min(prev.min, rec.score), max: Math.max(prev.max, rec.score),
  sum: prev.sum + rec.score }), { min: Infinity, max: 0, sum: 0 });

// date format more appropriate for display
const prettyDate = recs => recs.map(rec => ({ score: rec.score, date: moment(rec.date).format("ddd, MMMM Do YYYY, h:mm:ss a") }));

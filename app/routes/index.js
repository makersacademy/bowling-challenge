var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.sessionID);
  var sessionID = req.sessionID
  var rollsCollection = req.db.get('rolls');
  rollsCollection.find({'sessionID' : sessionID}, function(err,result){
    if (err) {
      console.log("GET / Error on find rolls:");
      console.log(err);
      res.render('index', { title: 'Ten Pin Bowling Scores', rolls: [] });
    } else {
      console.log("GET / Succesfully found rolls collection")
      // console.log(result[0].rolls);
      var rolls = [];
      if (result[0].rolls){
        rolls = result[0].rolls
      };
      res.render('index', { title: 'Ten Pin Bowling Scores', rolls: rolls });
    }
  });
});

/* POST rolls */
router.post('/rolls', function(req, res, next) {
  var sessionID = req.sessionID
  var rollsCollection = req.db.get('rolls');
  var roll = req.body.roll;
  rollsCollection.update({'sessionID' : sessionID},
                         { $push: { rolls: roll }},
                         {upsert:true},
                          function(err, doc){
                            if (err) {
                              console.log("POST /rolls Error on update rolls collection:");
                              console.log(err);
                            } else {
                              console.log("POST /rolls Succesfully updated rolls collection")
                              console.log(doc);
                            }
                          });

  res.redirect('/');
});

module.exports = router;

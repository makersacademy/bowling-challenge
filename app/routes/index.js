var express = require('express');
var router = express.Router();

var rolls = require('./rolls');
router.use(rolls);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("In GET /");
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
      var rolls = [];
      if (result[0].rolls){
        rolls = result[0].rolls
      }
      res.render('index', { title: 'Ten Pin Bowling Scores', rolls: rolls });
    }
  });
});



module.exports = router;

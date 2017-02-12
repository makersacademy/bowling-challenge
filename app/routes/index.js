var express = require('express');
var router = express.Router();

var rolls = require('./rolls');
router.use(rolls);
var Rolls = require("../models/rolls.js");
var RollsModel = new Rolls();

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

  // console.log("In GET /");
  // console.log(req.sessionID);
  //
  // var sessionID = req.sessionID
  // var getRolls = new Promise(function(resolve,reject){
  //   rolls = [];
  //   console.log("test call");
  //   console.log(RollsModel.getRolls(req, sessionID));
  //   console.log('ROLLS IS');
  //   console.log(rolls);
  //   resolve(rolls);
  // });
  //
  // getRolls.then(function(result){
  //   res.render('index', { title: 'Ten Pin Bowling Scores', rolls: result });
  // });

});




module.exports = router;

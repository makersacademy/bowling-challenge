var express = require('express');
var router = express.Router();

var Rolls = require("../models/rolls.js");
var RollsModel = new Rolls();
/* POST rolls */
router.post('/rolls', function(req, res, next) {

  var sessionID = req.sessionID
  var postRolls = new Promise(function(resolve,reject){
    RollsModel.updateRolls(req, sessionID);
    resolve();
  });
  postRolls.then(function(){
    res.redirect('/');
  });
});

module.exports = router;

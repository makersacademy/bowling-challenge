var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.sessionID);
  res.render('index', { title: 'Express' });
});

/* POST rolls */
router.post('/rolls', function(req, res, next) {
  var sessionID = req.sessionID
  var rollsCollection = req.db.get('rolls');
  // var rollsDoc = rollsCollection.find({'sessionID' : sessionID}, function(err, result){
  //   if (err) {
  //     console.log('cannot find sessionID');
  //   }
  //   else {
  //     console.log('not errored, result is');
  //     console.log(result);
  //     return result
  //   }
  // });
  // console.log(rollsDoc);
  rollsCollection.update({'sessionID' : sessionID},
                         {'sessionID' : sessionID},
                         {upsert:true},
                          function(err, doc){
                            if (err) {
                              console.log("Error on update rolls collection:");
                              console.log(err);
                            } else {
                              console.log("Succesfully updated rolls collection")
                              console.log(doc);
                            }
                          });
  // rollsCollection.insert({'sessionID' : sessionID});

  res.render('index', { title: 'Express' });
});

module.exports = router;

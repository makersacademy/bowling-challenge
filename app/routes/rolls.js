var express = require('express');
var router = express.Router();


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
                              res.redirect('/');
                            } else {
                              console.log("POST /rolls Succesfully updated rolls collection")
                              console.log(doc);
                              res.redirect('/');
                            }
                          });
});

module.exports = router;

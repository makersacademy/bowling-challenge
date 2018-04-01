const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router
mongoose.connect('mongodb://makersacademy:123456@ds125469.mlab.com:25469/makersacademy', function(err) {

  if (err) throw err;

  console.log('Succesfully connected')
});

var DocumentSchema = mongoose.Schema({
  name: String
})

var  document = mongoose.model('players', DocumentSchema);

router.get('/', function(req, res) {
  res.render('index')
})

// router.post('/', function(req, res) {
//   var nameVar = {
//     name: req.body.name
//
//   }
//   console.log(nameVar)
//   var newName = new document(nameVar);
//   newStudent.save();
//   res.redirect('/')
// })

router.post('/', function(req, res, next) {
  var nameVar = {
    name: req.body.name
  }
  nameVar.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});










module.exports = document;

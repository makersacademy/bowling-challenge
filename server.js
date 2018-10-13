// const express = require('express');
// const bodyParser= require('body-parser');
// const app = express();
// const session = require('express-session')
// // const bowling = require('./src/Game.js')
//
// app.set('view engine', 'ejs')
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(session({ secret: 'this-is-secretive-shhhh' }));
// // const game = new Game();
// app.engine('html', require('ejs').renderFile);
//
// app.listen(3000, function() {
//     console.log('listening on 3000')
//   })
//
// app.get('/', (req, res) => {
//   const sessionName = req.session.name
//   const sessionRollOne = req.session.rollOne
//   const sessionRollTwo = req.session.rollTwo
//   res.render('index.html', {name: sessionName, rollOne: sessionRollOne, rollTwo: sessionRollTwo})
// })
//
// app.post('/', (req, res) => {
//  req.session.name = req.body.nameInput
//  res.redirect('/')
// })
//
// app.post('/rollOne', (req, res) => {
//   req.session.rollOne = req.body.rollOne
//   // game.roll(req.session.rollOne)
//   res.redirect('/')
// })
//
// app.post('/rollTwo', (req, res) => {
//   req.session.rollTwo = req.body.rollTwo
//   // game.roll(req.session.rollTwo)
//   // console.log(game.rolls)
//   res.redirect('/')
// })

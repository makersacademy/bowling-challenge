var Game = require('./src/game')

$(document).ready(function () {

  var game = new Game

  $('#submit_score').on('click', function () {
    $('#input_score').val(function( index, value ) {
      var score = Number(value)
      game.roll(score)
      console.log(game.frames)
      updateTotalScore()
      updateFrameCard()
    })
  })

  function updateTotalScore() {
    var gameScore = game.calculateTotalScore()
    $('#total_score').text(gameScore)
  }

  function updateFrameCard() {
    var frames = game.frames
    var frameNumber = frames.length
    for (var i = 0; i < frameNumber; i++) {
      var idString = '#frame-' + (i+1)
      $(idString).text(frames[i].calculateTotalScore())
    }
  }
})


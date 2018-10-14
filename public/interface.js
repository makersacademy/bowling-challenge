var Game = require('./src/game')

$(document).ready(function () {

  var game = new Game

  $('#submit_score').on('click', function () {
    $('#input_score').val(function( index, value ) {
      var score = Number(value)
      game.roll(score)
      updateScore()
    })
  })

  function updateScore() {
    var gameScore = game.calculateTotalScore()
    $('#total_score').text(gameScore)
  }
})


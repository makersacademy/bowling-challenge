$(document).ready(function()  {

  $.getScript("/js/animations.js", function() { })

  game = new Game()
  animateRounds(game)

  $("button").on('click', function()  {
    var score = parseInt($(this).text())
    game.bowl(score)
    updateScores()
    endTurn(game, score)
  })

  function endTurn(game, score) {
    dimButtons(game, 11-score)
    animateRounds(game)
    endIfOver()
  }

  function endIfOver() {
    if(game.checkEnd() === true) { endGame(game) }
  }

  function updateScores() {
    updateFrameScores()
    updateFrameTotals()
    updateTotalScore()
  }

  function updateFrameScores()  {
    for (var i = 0;i<game.roundCount; i++)  {
      var scores = game.bowlScores(i)
      $('#ball1_'+String(i+1)).text(scores[0])
      $('#ball2_'+String(i+1)).text(scores[1])
    }
  }

  function updateFrameTotals() {
    for (var i = 0;i<game.roundCount-1; i++)  {
      if(game.bonusCount(i) === 0) {
        $('#roundScore'+String(i+1)).text(game.roundTotal(i))
      }
    }
  }

  function updateTotalScore() {
    for (var i = 0;i<game.roundCount-1; i++)  {
      if (isNaN(game.totalScore()) === false) {
        $('#total').text(game.totalScore())
      }
    }
  }

})

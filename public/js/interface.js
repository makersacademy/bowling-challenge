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
    for (var i = 0;(i<game.roundCount && i < 9); i++)  {
      var scores = game.bowlScores(i)
      $('#ball1_'+String(i+1)).text(scores[0])
      $('#ball2_'+String(i+1)).text(scores[1])
    }
    if (game.roundCount > 9) { roundTenScores() }
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

  function roundTenScores() {
    scores = getTenScores()
    if (scores.length > 0) { $('#ball1_10').text(scores[0]) }
    if (scores.length > 1) { $('#ball2_10').text(scores[1]) }
    if (scores.length > 2) { $('#ball3_10').text(scores[2]) }
  }

  function getTenScores() {
    var scores
    if (game.roundCount > 9) { scores = game.bowlScores(9) }
    if (game.roundCount > 10) { scores = scores.concat(game.bowlScores(10))}
    if (game.roundCount > 11) { scores = scores.concat(game.bowlScores(11))}
    return scores = scores.filter(function(element) { return element !== ""})
  }

})

$('document').ready(function() {

  var scorecard = new Scorecard(Frame, FinalFrame);

  refreshScores = function() {
    for (let i = 0; i < scorecard.currentFrame; i += 1) {
      $('#total' + i).text(scorecard.calculateFrameScore(i))
    }
    if (scorecard.gameOver === true) {
      $('#total9').text(scorecard.calculateFrameScore(9));
    }
    refreshGameOver();
  }

  refreshScores()

  $('#resetGame').click(function() {
    scorecard = new Scorecard(Frame, FinalFrame);
    for (let i = 0; i < 10; i += 1) {
      $('#total' + i).text(' ')
    }
  })

  for (let i = 0; i < 11; i += 1) {
    $('#scored' + i).click(function() {
    scorecard.roll(i);
    refreshScores();
    })
  }

  function refreshGameOver() {
    if (scorecard.gameOver === true) {
      $('#gameCompleted').text('Game over, you scored '
        + scorecard.totalScore() + '!');
    }
  }
});

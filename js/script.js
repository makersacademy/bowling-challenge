$( document ).ready(function() {
  var game = new Game();

  $('button').click('on', function() {
    var pins = parseInt($(this).text())
    var pinsHit = game.play(pins);
    var idRollScore = '#frame'+game.currentFrameNumber()+'-roll'+game.currentRoll()
    var idFrameScore = '#frame'+game.currentFrameNumber()+'-score'
    var idPrevFrameScore = '#frame'+game.prevFrameNumber()+'-score'
    updateMessage();
    updateScores(idRollScore, idFrameScore, idPrevFrameScore, pinsHit);
    checkIfGameOver();
  });

  var updateMessage = function() {
    $('#message').text(game.currentFrame.getMessage());
  }

  var updateScores = function(idRoll, idFrame, idPrevFrame, pinsHit) {
    $(idRoll).text(pinsHit);
    $(idFrame).text(game.currentFrame.getScore());
    if (game.currentFrameNumber() > 1) {
      $(idPrevFrame).text(game.prevFrame().getScore());
    }
    $('#tot-score').text(game.getTotScore());
  }

  var checkIfGameOver = function() {
    if (game.isOver()) {
      alert("Game Over! Your total score is: "+game.getTotScore())
      location.reload()
    }
  }

});

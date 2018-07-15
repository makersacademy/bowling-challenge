// JQuery
$(document).ready(function() {
  var score = new Score();
  var game = new Game();
  showGameStatus();
  showScorecard();
  updateScore();
  showGameStatus();
//  updateFrame();


  $('#bowl-pins').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    // convert string into integer
    var pinsInt = parseInt(pins);
    game.roll(pinsInt);
    showRolls();
    showFrame();
    updateScore();
    showStrike(pinsInt);
    showScorecard();
    showGameStatus();
  })

  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function showFrame() {
    $('#frame').text(game.getFrames());
  };

  function showScorecard() {
    $('#score-card').text(game.getScoreCard());
  };

  function showStrike(pinsInt) {
    $('#strike').text(game.checkStrike(pinsInt));
  };

  function showRolls() {
    $('#rolls-count').text(game.getRolls());
  };

  function showGameStatus() {
    if (game.gameOver() === false) {
      var gameStatus = 'In progress';
    } else {
      var gameStatus = 'Game Over!';
    }
    $('#game-status').text(gameStatus);
  };


});

// JQuery
$(document).ready(function() {
  var score = new Score();
  var game = new Game();
  updateGameStatus();
  updateScorecard();
  updateScore();
  updateGameStatus();
  updateFrame();


  $('#bowl-pins').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    // convert string into integer
    var pinsInt = parseInt(pins);
    game.roll(pinsInt);
    updateRolls();
    updateFrame();
    updateScore();
    updateStrike(pinsInt);
    updateScorecard();
    updateGameStatus();
  })

  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function updateFrame() {
    $('#frame').text(game.getFrames());
  };

  function updateScorecard() {
    $('#score-card').text(game.getScoreCard());
  };

  function updateStrike(pinsInt) {
    $('#strike').text(game.checkStrike(pinsInt));
  };

  function updateRolls() {
    $('#rolls-count').text(game.getRolls());
  };

  function updateGameStatus() {
    if (game.gameOver() === false) {
      var gameStatus = 'In progress';
    } else {
      var gameStatus = 'Game Over!';
    }
    $('#game-status').text(gameStatus);
  };

});

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
    var pins2 = parseInt(pins);
    game.roll(pins2);
    showRolls();
    showFrame();
    updateScore();
    showStrike(pins2);
    showScorecard();
    showGameStatus();
  })

  // $('#bowl-pins-2').change(function() {
  //   var pins = $('#bowl-pins-2').val();
  //     // $('#pins').text(pins);
  //
  //     // var pins2 = 2;
  //
  //     var pins2 = parseInt(pins);
  //     game.roll(pins2);
  //     showRolls();
  //     showFrame();
  //     updateScore();
  //     // showStrike();
  //     showScorecard();
  //     showGameStatus();
  // });

  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function showFrame() {
    $('#frame').text(game.getFrames());
  };

  function showScorecard() {
    $('#score-card').text(game.getScoreCard());
  };

  function showStrike(pins2) {
    $('#strike').text(game.checkStrike(pins2));
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

// JQuery
$(document).ready(function() {
  var score = new Score();
  var game = new Game();
  showGameStatus();
  showScorecard();
  updateScore();
  showGameStatus();
//  updateFrame();

  // $('#bowl-pins').change(function() {
  //   var pins = $('#bowl-pins').val();
  //     $('#pins').text(pins);
  //     game.roll(pins);
  //     updateScore();
  //   //  updateFrame();
  //     showScorecard();
  //     showRolls();
  // });

  $('#roll-button').on('click', function() {
    game.roll(5);
    showRolls();
    showFrame();
    updateScore();
    // showStrike();
    showScorecard();
    showGameStatus();
  });

  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function showFrame() {
    $('#frame').text(game.getFrames());
  };

  function showScorecard() {
    $('#score-card').text(game.getScoreCard());
  };

  // function showStrike() {
  //   $('#strike').text(game.checkStrike(10));
  // };

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

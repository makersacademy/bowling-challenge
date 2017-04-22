$(document).ready(function BowlingGame() {
  var game = new Game();
  var bowlNum = 0;

  function updateScore() {
    $('#gameScore').text(game.getCurrentScore());
  }

  function updateFrame() {
    $('#frameNumber').text(game.getFrameNumber());
  }

  function updateBowlScore() {
    $('#bowlIndex-' + bowlNum).text(game.currentFrame.bowled[bowlNum]);
  }

// WIP
  function updateFrameScore() {
    $('#scoreIndex-' + bowlNum).text(game.currentFrame.frameScore());
  }

  $('#bowl').click(function (event) {
    game.bowl();
    updateBowlScore();
    updateFrameScore();
    updateScore();
    updateFrame();
    bowlNum += 1;
  });



});

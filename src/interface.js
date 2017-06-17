"use strict";

$(document).ready(function(){
  var game = new Game();
  var frame = new Frame();
  var ai = new Ai();

  updateFrame();
  updateScore();

  $("#bowl").on("click", function(){
    bowl();
    updateFrame();
    console.log(game.frame);
  });

  function updateScore() {
    $('#currentScore').text('Your Score: ' + game.sumScores());
  }

  function updateFrame() {
    $('#currentFrame').text('Frame: ' + game.frame + '    |    ');
  }

  function bowl() {
    frame.bowl();
    if (!frame.isFirstBall) {
      game.incrementFrame();
    }
  }

});

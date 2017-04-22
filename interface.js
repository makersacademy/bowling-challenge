'use strict';

var frame = new Frame;
var game = new Game;

var totalScoreDisplay = function(){
  $('#total-score').text(game.totalGameScore());
};

var frameNumber = 0

$(document).ready(function(){
  totalScoreDisplay();
  $('#start-game').click(function(){
    game.startGame();
    totalScoreDisplay();
  });

  $('#bowl').click(function(){
    $('#score-' + frameNumber + '-1').text(game.playFrame(frameNumber));
    if (frameNumber < 9){
      frameNumber++;
    };
    totalScoreDisplay();
  });
});

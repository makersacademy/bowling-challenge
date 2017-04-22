'use strict';

var frame = new Frame;
var game = new Game;

var totalScoreDisplay = function(extra){
  var totalScore = game.totalGameScore() + extra;
  $('#total-score').text(totalScore);
  for(var x=0; x < totalScore; x++) {
    $('#pins-down').append('🎳');
  }
};

var frameNumber = 0
var lastFrameDone = false;

$(document).ready(function(){
  totalScoreDisplay(0);
  $('#start-game').click(function(){
    frameNumber = 0;
    for(var x=0; x<10; x++) {
      $('#bowl').click();
    }
  });

  $('#bowl').click(function(){
    $('#bowling-sound')[0].currentTime = 0;
    $('#bowling-sound')[0].play();
    var extra = 0;
    if (frameNumber <= 9){
      frame = new Frame;
      $('#score-' + frameNumber + '-1').text(frame.firstBowl());
      $('#score-' + frameNumber + '-2').text(frame.secondBowl());
      game.scoreFrame(frameNumber, frame);
      if (frame.frameScore() !== 10){
        $('#total-' + frameNumber).text(game.totalGameScore());
      } else {
        $('#total-' + frameNumber).text('🎉');
      }
      frameNumber++;
      totalScoreDisplay(extra);
    } else if(!lastFrameDone && frame.frameScore() === 10) {
      extra = frame.extraBowl()
      $('#score-9-3').text(extra);
      lastFrameDone = true;
      totalScoreDisplay(extra);
    }
  });
});

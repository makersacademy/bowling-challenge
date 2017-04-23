'use strict';

var frame = new Frame;
var game = new Game;

var totalScoreDisplay = function(extra){
  var totalScore = game.totalGameScore() + extra;
  $('#total-score').text(totalScore);
  $('#pins-down').empty();
  for(var x=0; x < totalScore; x++) {
    $('#pins-down').append('🎳');
  }
};

var frameNumber = 0
var lastFrameDone = false;

$(document).ready(function(){
  totalScoreDisplay(0);
  $('#new-game').click(function(){
    $('#shut-up')[0].play();
  });
  $("#shut-up").bind('ended', function(){
    location.reload();
});
  $('#bowl').click(function(){
    var extra = 0;
    if (frameNumber <= 9){
      frame = new Frame;
      $('#bowling-sound')[0].currentTime = 0;
      $('#bowling-sound')[0].play();
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

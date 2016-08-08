'use strict';

$(document).ready(function() {
  var bowling = new Bowling();

  $('#running-score').text(bowling.previousFrame.runningScore);

  $('#enter-score').submit(function(){
    var points = $('#score').val();
    bowling.throw(points);
    $('#running-score').text(bowling.previousFrame.runningScore);
  });
});

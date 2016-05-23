$(document).ready(function(){
  var bowling = new Bowling();
  updateScore();
  updateFrame();

  function updateScore() {
    $("#currentScore").text(bowling.calculateScore());
  };

  function updateFrame() {
    $('#currentFrame').text(bowling.currentFrame());
  }

  function hitPins(pins){

  }

  $('#frame').submit(function(event) {
    event.preventDefault();
    var firstFrame = $('#firstFrame').val()
    var secondFrame = $('#secondFrame').val();
    bowling.throwBall($('#firstFrame').val());
    bowling.throwBall($('#secondFrame').val());
    updateScore();
    updateFrame();
  })



})

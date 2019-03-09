$(document).ready(function() {

  var game = new Game();
  var roll1, roll2;
  var currentFrame = 1;

  $.updateScorecard = function() {}

  $('#addFrame').click(function() {
    
    if (currentFrame <= 10) {
      roll1 = $('#roll1').val();
      roll2 = $('#roll2').val();
      game.addFrame(roll1, roll2);
      $('#frame' + (currentFrame)).text(roll1 + ',' + roll2);
      // update score row?
      currentFrame++;
    } else {
      $.updateScorecard();
    }

  });

});
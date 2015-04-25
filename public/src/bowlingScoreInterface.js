var bowlingScore = new bowlingScore()
$(document).ready(function(){

  $('.pin').click(function(){
    value = parseInt($(this).val());
    bowlingScore.roll(value);
  });

});
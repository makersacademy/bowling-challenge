

$( document ).ready(function(){
  var bowling = new Bowling();
  $('#currentscore').text(bowling.showScore());
});

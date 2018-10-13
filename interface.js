$(document).ready(function() {
var game = new Game();

$('#gamescore').text(game.totalScore);

$('#framescore').text(game._currentFrame.frameScore);

$('#rollBall').submit(function(event){
  event.preventDefault();
  game.rollBall($('#number').val());
  $('#gamescore').text(game.totalScore); //could refactor into a method
  $('#framescore').text(game._currentFrame.frameScore);
})



})

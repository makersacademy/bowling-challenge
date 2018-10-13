$(document).ready(function() {
var game = new Game();

updateScores()

$('#rollBall').submit(function(event){
  event.preventDefault();
  game.rollBall($('#number').val());
  updateScores()
})



function updateScores() {
  $('#gamescore').text(game.totalScore);
  $('#framescore').text(game._currentFrame.frameScore);
  $('#Frame-number').text(game._frameNumber);
}


})

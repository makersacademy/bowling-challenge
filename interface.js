$(document).ready(function() {
var game = new Game();

$('#gamescore').text(game.totalScore);

$('#rollBall').submit(function(event){
  event.preventDefault();
  var number = $('#number').val();
  n = Number(number); //put this in logic
  game.rollBall(n);
  $('#gamescore').text(game.totalScore);
})

})

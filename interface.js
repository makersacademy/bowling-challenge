$(document).ready(function () {
  let game = new BowlingGame();

$('#updateScore').click(function() {
  game.roll((singleScore()));
  console.log((singleScore()));
});

$('#showScore').click(function() {
  $('#score').text(game.score());
});

function singleScore() {
  var n = document.getElementById("bowl").value
  return(n);
  }



});
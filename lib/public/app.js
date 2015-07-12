game = new Game();

$('#submit').click(function() {
  pinsDown = $('#score').val();
  game.updateScore(pinsDown);
  console.log(pinsDown);
  updateScorecard();
})

function updateScorecard() {
  $('#scorecard').append(pinsDown + " ");
  $('#total').html(game.score);
};

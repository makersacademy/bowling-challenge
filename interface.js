$(document).ready(function() {
  var game = new BowlingGame ();

  $('#roll-ball').on('click', function() {
    game.roll(game.random());
    $('#current-frame').text(game.currentFrame);
    $('#current-score').text(game.currentScore());
  })

})

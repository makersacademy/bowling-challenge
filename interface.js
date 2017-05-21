$(document).ready(function() {
  var game = new Bowling();
  $('#frame').text(game.currentFrame());
});

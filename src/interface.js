$(document).ready(function() {
  var game = new Game();

  $('#play-button').on('click', function() {
    game.play();
  });
});

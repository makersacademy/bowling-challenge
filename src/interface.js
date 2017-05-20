$(document).ready(function() {
  var game = new Game();

  $('#bowl').click(function() {
    game.bowl();
  });

  $('new_game').click(function() {
    game.newGame();
  });

});

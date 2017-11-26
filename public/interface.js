$(document).ready(function() {

  var game = new Game();

  $("#newGame").on('click', function() {
    $("#newGame").html(game.newGame());
  })

});

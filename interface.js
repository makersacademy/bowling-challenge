$(document).ready(function() {
  var game = new Game();


  $('#one').on('click', function() {
    game.roll(1);
  });
});
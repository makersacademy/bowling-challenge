$(document).ready(function()

  {

    game = new Game();


    var displayScore = (function() {
      $('#output').html(game.score);
    });
      displayScore();
});

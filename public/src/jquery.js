$(document).ready(function()

  {

    game = new Game();


    var displayTemp = (function() {
      $('#output').html(game.score);
    });
      displayTemp();
});

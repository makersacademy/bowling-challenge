"use strict";

$(document).ready(function(){
  var game = new Game();

  updateScore();

  $("#bowl").on("click", function(){
    game.bowl();
    updateScore();
  });

  function updateScore() {
    $('#currentScore').text(game.scoreCard[game.turn - 1]);
    $('#currentTurn').text(game.turn);
  }

});

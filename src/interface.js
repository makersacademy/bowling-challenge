"use strict";

$(document).ready(function(){
  var game = new Game();

  updateScore();

  $("#bowl").on("click", function(){
    game.bowl();
    updateScore();
  });

  function updateScore() {
    $('#currentTurn').text(game.turn);
    $('#score1').text(game.scoreCard[0]);
    $('#score2').text(game.scoreCard[1]);
    $('#score3').text(game.scoreCard[2]);
    $('#score4').text(game.scoreCard[3]);
    $('#score5').text(game.scoreCard[4]);
    $('#score6').text(game.scoreCard[5]);
    $('#score7').text(game.scoreCard[6]);
    $('#score8').text(game.scoreCard[7]);
    $('#score9').text(game.scoreCard[8]);
    $('#score10').text(game.scoreCard[9]);
    $('#scoreExtra').text(game.scoreCard[10]);
    $('#currentScore').text(game.scoreCard[game.turn - 1]);
  }

});

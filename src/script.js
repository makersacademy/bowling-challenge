'use strict';

$( document ).ready(function() {
  var game;
  game = new Game();

  

  $('#total-score').text(game.totalScore());

});
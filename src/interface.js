'use strict';

$(document).ready(function() {
  var player = new Player(`Player`);
  var game = new Game(player);

  updatePlayerName();
  updatePlayerScore();

  function updatePlayerName() {
    $(`#playerName`).text(game.player.name);
  }

  function updatePlayerScore() {
    $(`#playerScore`).text(game.player.score);
  }

});
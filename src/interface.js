'use strict';

$(document).ready(function() {
  var player = new Player(`Player`);
  var game = new Game(player);

  updatePlayerName();

  function updatePlayerName() {
    $(`#playerName`).text(game.player.name);
  }

});
"use strict";

$(document).ready(function() {
  let game = new Bowling();
  updateScore()

  function updateScore(){
        $("#score").text(game.score)
    };


});

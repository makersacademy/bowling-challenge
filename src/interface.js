"use strict";

$(document).ready(function(){
  var frame = new Frame();

  updateScore();

  $("#bowl").on("click", function(){
    frame.bowl();
    updateScore();
  });

  function updateScore() {
    $('#currentScore').text(frame.score);
  }
});

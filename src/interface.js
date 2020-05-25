"use strict";

$(document).ready(function() {
  let game = new Bowling();
  let currentFrame = new Array();

  updateScore();
  updateFrame();
  scoreFormReset();

  function updateScore(){
    $("#score").text(game.score);
  }

  function updateFrame() {
    $("#frame").text(game.frame);
  }

  function displayScorecard() {
    $("#scoreCard").text(game.scoreCard);
  }

  function scoreFormReset() {
    let form = document.getElementById("scoreForm");
    form.reset();
  }

  $("#addScore").click(function() {
  event.preventDefault();
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let currentFrame = [parseInt(a), parseInt(b)];
  $("#score").text(game.scoring(currentFrame));
  displayScorecard();
  scoreFormReset();
  updateFrame();
  });

});

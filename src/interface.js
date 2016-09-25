"use strict"

$("#game_area").hide();

$(document).ready(function() {
  $("#game_area").hide();
  var bowling;
  var count = 1;

  $("#name_submit").click(function() {
    var name = $("#playerName").val();
    bowling = new Bowling(name);
    $("#welcome_user").text("Welcome, " + name + "!");
    renderGameContent();
  });

  function renderGameContent() {
    $("#game_area").show();
    $("#main_area").hide();

  };

  $("#roll").click(function() {
    var rollResult = bowling.roll();
    if (rollResult === 10 && bowling._currentFrame.frameContent.length === 1) {
      $("#r" + count + "_result").text(rollResult);
      count++;
      rollResult = 0;
    }
    $("#r" + count + "_result").text(rollResult);
    count++
    $("#score").text("Your score: " + bowling.score);
    if (bowling.frameNumber === 10 && bowling._currentFrame.isFrameOver()) {
      $("#game_over_msg").text("Game Over")
    }
  });
});

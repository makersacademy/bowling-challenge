"use strict"

$("#game_area").hide();

$(document).ready(function() {
  $("#game_area").hide();
  var bowling;
  var count = 0;
  var rollNumber = 0;

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

  function actIfRollResultIsTen(rollResult) {
    if (bowling.frameNumber !== 10 && rollResult === 10 && bowling.getRollNumber() === 1) {
      renderResult(rollResult, bowling.getRollNumber());
      rollResult = 0;
      rollNumber = 2;
    }
    return rollResult;
  };

  function renderCells(row, rollResult, rollNr) {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Frame #" + bowling.frameNumber;
    cell2.innerHTML = "Roll #" + rollNr;
    cell3.innerHTML = rollResult;
  };

  function renderResult(rollResult, rollNr) {
    if (count < 8) {
      var tbody = document.getElementById("tbody_1");
      var row = tbody.insertRow(count);
      renderCells(row, rollResult, rollNr);
      count++;
    } else if (count < 16) {
      var tbody = document.getElementById("tbody_2");
      var row = tbody.insertRow(count - 8);
      renderCells(row, rollResult, rollNr);
      count++;
    } else {
      var tbody = document.getElementById("tbody_3");
      var row = tbody.insertRow(count - 16);
      renderCells(row, rollResult, rollNr);
      count++;
    }
  }

  $("#roll").click(function() {
    var rollResult = bowling.roll();
    rollNumber = bowling.getRollNumber();
    rollResult = actIfRollResultIsTen(rollResult);
    renderResult(rollResult, rollNumber);
    $("#score").text("Your score: " + bowling.score);
    if (bowling.frameNumber === 10 && bowling._currentFrame.isFrameOver()) {
      $("#game_over_msg").text("Game Over")
    }
  });
});

var scorecard = new Scorecard();

document.addEventListener("DOMContentLoaded", function (event) {

  var firstRoll = false; 

  document.getElementById("submitRoll").onclick = function() {
    processRoll();
  }

  document.getElementById("inputBox").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      processRoll();
    }
  });

  var processRoll = function() {
    if (scorecard.gameOver) {
      alert("Game Over!");
    }

    var input = document.getElementById("inputBox").value;
    var num = parseInt(input);
    scorecard.addRoll(num);
    document.getElementById("score").innerHTML = scorecard.currentScore;

    var frame = scorecard.frame;

    if (firstRoll) {
      document.querySelector(`#frame${frame} #roll1`).innerHTML = input;
      firstRoll = false;
    } else {
      document.querySelector(`#frame${frame} #roll2`).innerHTML = input;
      firstRoll = true;
    }

    document.getElementById("inputBox").value = "";
    document.getElementById("inputBox").focus();
  }

});
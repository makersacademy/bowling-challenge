"use strict"

var scorecard = new Scorecard;

function record(rolledScore) {
  var frameRollID =
    "f" + scorecard.currentFrame + "r" + scorecard.currentRoll;
  try {
    scorecard.recordScore(rolledScore);
    updateDisplay(frameRollID, rolledScore)
  }
  catch(error) {
    alert(error);
  }
};

function updateDisplay(frameRollID, rolledScore) {
  if(document.getElementById(frameRollID) != null) {
    document.getElementById(frameRollID).innerHTML = rolledScore;
  }
  document.getElementById("current_frame").innerHTML =
    scorecard.currentFrame;
  document.getElementById("current_roll").innerHTML =
    scorecard.currentRoll;
  for(var i=1; i<=10; i++) {
    var frameScoreID = "f" + i + "s";
    document.getElementById(frameScoreID).innerHTML =
      scorecard.frameScore(i);
  }
  document.getElementById("total").innerHTML =
    scorecard.totalScore();
}

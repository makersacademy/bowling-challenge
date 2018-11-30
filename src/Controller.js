scorecard = new Scorecard;

function record(rolledScore) {
  frameRollID = "f" + scorecard.currentFrame + "r" + scorecard.currentRoll;
  try {
    scorecard.recordScore(rolledScore);
    updateDisplay(frameRollID, rolledScore)
  }
  catch(error) {
    alert(error);
  }
};

function updateDisplay(frameRollID, rolledScore) {
  document.getElementById(frameRollID).innerHTML = rolledScore;
  document.getElementById("current_frame").innerHTML =
    scorecard.currentFrame;
  document.getElementById("current_roll").innerHTML =
    scorecard.currentRoll;
  for(i=1; i<=scorecard.currentFrame; i++) {
    frameScoreID = "f" + i + "s";
    document.getElementById(frameScoreID).innerHTML =
      scorecard.frameScore(i);
  }
}

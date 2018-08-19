displayer = new Displayer;

var playerInputElement = document.getElementById('playerInput');

function Displayer() {
  this.scorecard = new ScoreCard;
}

Displayer.prototype.addToScoreCard = function () {
  var roll = Number(document.getElementById('playerInput').value)
  try {
    this.scorecard.enter_roll(roll)
  }
  catch(e) {
    window.alert(e.message);
  };
  for (i = 1; i <= this.scorecard.rolls.length; i++) {
    var rollToUpdate = document.getElementById("roll" + i);
    rollToUpdate.innerHTML = this.scorecard.rolls[i - 1];
  }
  for (i = 1; i <= this.scorecard.frame_scores.length; i++) {
    var frameToUpdate = document.getElementById("frame" + i);
    frameToUpdate.innerHTML = this.scorecard.frame_scores[i - 1];
  }
};

function resetInputText() {
  document.getElementById('playerInput').value = '';
}

playerInputElement.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("inputButton").click();
  }
});

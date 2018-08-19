displayer = new Displayer;

var playerInputElement = document.getElementById('playerInput');

function Displayer() {
  this.scorecard = new ScoreCard;
}

Displayer.prototype.addToScoreCard = function () {
  var roll = Number(document.getElementById('playerInput').value)
  console.log(this.scorecard.rolls);
  try {
    this.scorecard.enter_roll(roll)
  }
  catch(e) {
    window.alert(e.message);
  };
  console.log(this.scorecard.rolls)
  for (i = 1; i <= this.scorecard.rolls.length; i++) {
    var rollToUpdate = document.getElementById("roll" + i);
    rollToUpdate.innerHTML = this.scorecard.rolls[i - 1];
  }

  frameToUpdate = document.getElementById(`frame${this.scorecard.current_frame}`);
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

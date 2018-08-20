displayer = new Displayer;

var playerInputElement = document.getElementById('playerInput');

function Displayer() {
  this.scorecard = new ScoreCard;
  this.displayed_rolls = [];
  this.final_frame_displayed_rolls = [];
}

Displayer.prototype.addToScoreCard = function () {
  var roll = Number(document.getElementById('playerInput').value)
  try {
    this.scorecard.enter_roll(roll)
  }
  catch(e) {
    window.alert(e.message);
  };
  this.updateDisplayedRollsArray();
  this.updateFinalDisplayedRollsArray();
  for (i = 1; i <= this.scorecard.rolls.length && i <= 18; i++) {
    var rollToUpdate = document.getElementById("roll" + i);
    rollToUpdate.innerHTML = this.displayed_rolls[i - 1];
  }
  for (i = 1; i <= this.scorecard.final_frame_rolls.length; i++) {
    var finalRollToUpdate = document.getElementById("final_roll" + i);
    finalRollToUpdate.innerHTML = this.final_frame_displayed_rolls[i - 1];
  }
  for (i = 1; i <= this.scorecard.frame_scores.length && i <= 10; i++) {
    var frameToUpdate = document.getElementById("frame" + i);
    frameToUpdate.innerHTML = this.scorecard.frame_scores[i - 1];
  }
  document.getElementById('total_score').innerHTML = this.scorecard.total_score()
  if (this.scorecard.gameOver()) {
    this.gameOverPopUp(this.scorecard.total_score());
  }
};

Displayer.prototype.gameOverPopUp = function (score) {
  window.alert(`Game Over, final score is ${this.scorecard.total_score()}. ` + this.specialGameEndings(score));
}

Displayer.prototype.resetInputText = function () {
  document.getElementById('playerInput').value = '';
}

Displayer.prototype.updateDisplayedRollsArray = function () {
  this.displayed_rolls = [];
  for (i = 0; i < this.scorecard.rolls.length; i += 2) {
    tempArray = this.scorecard.rolls.slice(i, i + 2);
    this.displayed_rolls.push(tempArray);
  };
  for (i = 0; i < this.displayed_rolls.length; i++) {
    frame = this.displayed_rolls[i];
    if (frame[0] === 10) {
      frame[0] = "X";
      frame[1] = "-";
    }
    else if (frame[0] + frame[1] === 10) {
      frame[1] = "/";
    };
  }
  for (i = 0; i < this.displayed_rolls.length; i++) {
    frame = this.displayed_rolls[i];
    for (j = 0; j < 2; j++) {
      if (frame[j] === 0) {
        frame[j] = "-"
      }
    };
  };
  this.displayed_rolls = [].concat.apply([], this.displayed_rolls)
};

Displayer.prototype.updateFinalDisplayedRollsArray = function () {
  this.final_frame_displayed_rolls = this.displayed_rolls.slice(18, this.displayed_rolls.length);
  for (i = 0; i < this.final_frame_displayed_rolls.length; i++) {
    if (this.final_frame_displayed_rolls[i] === "X") {
      this.final_frame_displayed_rolls.splice(i + 1, 1)
    }
  }
};

Displayer.prototype.specialGameEndings = function (score) {
  if (score === 0) {
    return "Gutter Game :(";
  }
  else if (score === 300) {
    return "Perfect Game!!!";
  }
  else {
    return "";
  }
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

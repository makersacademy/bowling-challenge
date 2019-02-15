var scorecard = new Scorecard();
var turnCounter = 1;
var frameCounter = 1;

document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello World");
});

function pinHit(number) {
  if (frameCounter === 10) {
    turnTenRules(number);
  } else {
    if (turnCounter === 1) {
      // If Turn 1
      scorecard.firstThrow(number);
      if (scorecard.strikeCheck(scorecard._firstThrow)) {
        ifStrike();
        frameCounter++;
      } else {
        displayAndIncrement(number);
      }
    } else {
      scorecard.secondThrow(number);
      if (scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)) {
        ifSpare();
        incrementCounters();
      } else {
        displayAndIncrement(number);
      }
    }
  }
}

function ifStrike() {
  scorecard.recordStrike();
  displayThrow(frameCounter, 2, "X");
  updateScores();
}

function ifSpare() {
  displayThrow(frameCounter, 2, "/");
}

function displayAndIncrement(number) {
  displayThrow(frameCounter, turnCounter, number);
  incrementCounters();
}

function incrementCounters() {
  turnCounter++;
  if (turnCounter === 3) {
    scorecard.addToFrames();
    updateScores();
    turnCounter = 1;
    frameCounter++;
  }
}

function displayThrow(frame, turn, number) {
  let idToChange = `f${frame}t${turn}`;
  document.getElementById(idToChange).innerHTML = number;
}

function displayScores() {
  for (var i = 1; i <= 10; i++) {
    let score = scorecard._score[i - 1];
    if (typeof score === "undefined") {
      score = "";
    }
    document.getElementById(`f${i}total`).innerHTML = score;
  }
}

function updateTotal() {
  scorecard.updateScores();
  document.getElementById("total").innerHTML = scorecard.calculateTotal();
}

function updateScores() {
  updateTotal();
  displayScores();
}

    // console.log(`f${frameCounter}t${turnCounter}`);

function turnTenRules(number) {
  var extraTurn = false;
  if (turnCounter === 1) {
    // If Turn 1
    scorecard.firstThrow(number);
    // If Strike, display Strike and trigger extra turn
    if (scorecard.strikeCheck(scorecard._firstThrow)) {
      displayThrow(frameCounter, turnCounter, "X");
      extraTurn = true;
    // Else Display Number
    } else {
      displayThrow(frameCounter, turnCounter, number);
    }
  } // End of Turn 1 Check
  if (turnCounter === 2) {
    // If Turn 2
    scorecard.secondThrow(number);
    // If Strike, display Strike and trigger extra turn
    if (scorecard.strikeCheck(scorecard._secondThrow)) {
      displayThrow(frameCounter, turnCounter, "X");
      extraTurn = true;
    }
      // If Spare, display Spare and trigger extra turn
      else if (scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)) {
      displayThrow(frameCounter, turnCounter, "/");
      extraTurn = true;
      // Else Display Number
    } else {
      displayThrow(frameCounter, turnCounter, number);
  }
    // Add to Frame and Update Scores after Turn 2
    scorecard.addToFrames()
    updateScores()
  } // End of Turn 2 Check
    // If Turn 3 was triggered
    if (extraTurn === true && turnCounter === 3) {
    // If Strike, display Strike
    if (scorecard.strikeCheck(scorecard._secondThrow)) {
        displayThrow(frameCounter, turnCounter, "X");
    }
    // Else display number
    else {
        displayThrow(frameCounter, turnCounter, number);
    }
    // Push extra turn score to existing array
    scorecard._allFrames[9].push(number);
    // Update Scores
    updateScores()
  }
  // After each turn, increment Turn
  turnCounter++;
  console.log(scorecard._scores)
}

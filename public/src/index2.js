$(document).ready(function() {
  bowlingScore = new BowlingScore();

  startNewRound = function() {
    round = bowlingScore.newRound()
  }

  startNewRound()

  $( ".btn" ).click(function( event ) {
    pins = $(event.target).text()
    currentRoll = round.setRoll(pins)
    if (typeof currentRoll === "string") {
      alert(currentRoll)
    } else {
      checkValue(parseInt(pins))
    }
  });

  checkValue = function(pins) {
    if (round.currRoll === 1) {
      checkRoll1(pins)
    } else if (round.currRoll === 2) {
      checkRoll2(pins)
    } else {
      checkRoll3(pins)
    }
  }

  checkRoll1 = function(pins) {
    if (pins === 10) {
      $(".round-" + bowlingScore.currRound + " .roll-" + (round.currRoll + 1)).text("X")
      printScore()
    } else {
      printValue(pins)
      round.countRoll()
    }
  }

  checkRoll2 = function(pins) {
    printValue(pins)
    printScore()
    if (bowlingScore.currRound === 10) {
      round.countRoll()
    }
  }

  checkRoll3 = function(pins) {
    printValue(pins)
    printResult()
  }

  printResult = function() {
    round.score()
    prevRound = bowlingScore.currRound - 1
    bowlingScore.bonusRound()
    $(".round-" + prevRound + " .score").text(bowlingScore.prevRound.currentScore)
    $(".round-" + bowlingScore.currRound + " .score").text(round.currentScore)

    if (round.currentScore === 0) {
      $(".total .score").text("Gutter Game")
    } else if (round.currentScore === 300) {
      $(".total .score").text("Perfect Game")
    } else {
      $(".total .score").text(round.currentScore)
    }
  }

  printValue = function(pins) {
    $(".round-" + bowlingScore.currRound + " .roll-" + round.currRoll).text(pins)
  }

  printScore = function() {
    round.score()
    prevRound = bowlingScore.currRound - 1
    if (prevRound >= 1) {
      bowlingScore.finalScore()
    }
    if (bowlingScore.prevRound.plus !== "" && bowlingScore.currRound !== 10) {
      $(".round-" + prevRound + " .score").text(bowlingScore.prevRound.currentScore)
    }
    if (bowlingScore.round.plus === "" && bowlingScore.currRound !== 10) {
      $(".round-" + bowlingScore.currRound + " .score").text(round.currentScore)
    }
    if (bowlingScore.currRound !== 10) {
      startNewRound()
    }
  }
});

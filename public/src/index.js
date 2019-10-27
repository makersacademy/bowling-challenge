$(document).ready(function() {
  bowlingScore = new BowlingScore();

  startNewRound = function() {
    round = bowlingScore.newRound()
  }

  checkRound = function() {
    prevRound = bowlingScore.currRound - 1

    prevScore = parseInt($(".round-" + prevRound + " .score"))
    plus = getPlus()
    bowlingScore.finalScore(plus, prevScore)

    if (bowlingScore.currRound === 1 ) {
      round.score()
      printScore(round.currentScore)
      round.countRoll()
      startNewRound()
    } else if (bowlingScore.currRound < 10) {
      round.score()
      printValue(roll)
      printScore(round.currentScore)
      startNewRound()
    } else {
      round.score()
      printValue(roll)
      printScore(round.currentScore)
    }
  }

  checkRoll = function(roll) {
    if (roll === 10 && round.currRoll === 1) {
      $(".round-" + bowlingScore.currRound + " .roll-" + (round.currRoll + 1)).text("X")
      checkRound()
    } else if (roll === 10 && round.currRoll === 2) {
      printValue(roll)
      round.score()
      printScore(round.currentScore)
    } else if (round.currRoll === 1) {
      printValue(roll)
      round.countRoll()
    } else {
      printValue(roll)
      checkRound()
    }
  }

  startNewRound()

  $( ".btn" ).click(function( event ) {
    roll = $(event.target).text()
    currentRoll = round.setRoll(roll)
    if (typeof currentRoll === "string") {
      alert(currentRoll)
    } else {
      checkRoll(parseInt(roll))
    }
  });

  getPlus = function() {
    prevRoll1 = parseInt($(".roll-1" + (bowlingScore.currRound - 1)))
    prevRoll2 = parseInt($(".roll-2" + (bowlingScore.currRound - 1)))
    if (prevRoll1 === 10 || prevRoll2 === 10) {
      return 1
    }
    if (prevRoll1 + prevRoll2 === 10) {
      return 2
    }
      return 0
  }

  printValue = function(roll) {
    $(".round-" + bowlingScore.currRound + " .roll-" + round.currRoll).text(roll)
  }
  printScore = function(score) {
    $(".round-" + bowlingScore.currRound + " .score").text(score)
  }

});

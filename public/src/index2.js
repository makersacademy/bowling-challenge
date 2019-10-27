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
      printValue(pins)
      printScore()
      startNewRound()
    } else {
      checkRoll3(pins)
    }
  }

  checkRoll1 = function(pins) {
    if (pins === 10) {
      $(".round-" + bowlingScore.currRound + " .roll-" + (round.currRoll + 1)).text("X")
      startNewRound()
    } else {
      printValue(pins)
      round.countRoll()
    }
  }

  // checkRound = function() {
  //   prevRound = bowlingScore.currRound - 1
  //
  //   prevScore = parseInt($(".round-" + prevRound + " .score")).text()
  //   plus = getPlus()
  //   bowlingScore.finalScore(plus, prevScore)
  //
  //   if (bowlingScore.currRound === 1 ) {
  //     round.score()
  //     printScore(round.currentScore)
  //     round.countRoll()
  //     startNewRound()
  //   } else if (bowlingScore.currRound < 10) {
  //     round.score()
  //     printValue(roll)
  //     printScore(round.currentScore)
  //     startNewRound()
  //   } else {
  //     round.score()
  //     printValue(roll)
  //     printScore(round.currentScore)
  //   }
  // }


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

  printValue = function(pins) {
    $(".round-" + bowlingScore.currRound + " .roll-" + round.currRoll).text(pins)
  }

  printScore = function() {
    round.score()
    prevRound = bowlingScore.currRound - 1
    if (prevRound >= 1) {
      prevScore = parseInt($(".round-" + prevRound + " .score").text())
      plus = getPlus()
      bowlingScore.finalScore(plus, prevScore)
    }
    $(".round-" + bowlingScore.currRound + " .score").text(round.currentScore)
  }
});

$(document).ready(function() {
  bowlingScore = new BowlingScore();

  startNewRound = function() {
    round = bowlingScore.newRound()
    // console.log(round)
  }

  checkRound = function() {
    prevRound = bowlingScore.currRound - 1
    plus = $(".round-" + prevRound + " .plus").text()
    score = parseInt($(".round-" + prevRound + " .total").text())

    if (bowlingScore.currRound === 1 ) {
      printValue()
      startNewRound()
      $("#current-round").text(bowlingScore.currRound)
    } else if (bowlingScore.currRound < 10) {
      bowlingScore.finalScore(plus, score)
      printValue()
      startNewRound()
      $("#current-round").text(bowlingScore.currRound)
    } else {
      bowlingScore.finalScore(plus, score)
      printValue()
      $("#input-roll-1, .first-roll .btn").prop("disabled", true)
      $(".form-group.second-roll").toggleClass("d-none")
      $("#input-roll-2, .second-roll .btn").prop("disabled", true)
      $(".form-group.third-roll").toggleClass("d-none")
      $(".row.round-bonus").toggleClass("d-none")
    }
  }

  checkRoll1 = function() {
    if (round.roll1 === 10) {
      $("#input-roll-1, .first-roll .btn").prop("disabled", false)
      $(".round-" + bowlingScore.currRound + " .first-roll").text(round.roll1)
      $(".round-" + bowlingScore.currRound + " .plus").text(round.plus)
      $(".round-" + bowlingScore.currRound + " .total").text(round.currentScore)
      $("#input-roll-1").val(null)
      $("#input-roll-2").val(null)
      round.score()
      round.setPlus()
      checkRound()
      } else {
      $(".form-group.second-roll").toggleClass("d-none") // unhide second field
    }
  }

  checkRoll2 = function() {
    if (round.roll2 === 10 || round.currentScore === 10) {
      round.score()
      round.setPlus()
      checkRound()
    } else {
      round.score()
      checkRound()
    }
  }

  startNewRound()
  // $("#current-round").text(bowlingScore.currRound)

  $( ".btn" ).click(function( event ) {
    roll1 = $(".round-" + "bowlingScore.currRound" + " .rolls .roll-1").val()
    if (typeof round.setRoll1(roll1) === "string") {
      alert(round.setRoll1(roll1))
    } else {
      round.setRoll1(roll1)
      $("#input-roll-1, .first-roll .btn").prop("disabled", true) // disable first field
      checkRoll1()

    }
  });

  $( ".second-roll .btn" ).click(function( event ) {
    roll2 = $("#input-roll-2").val()
    if (typeof round.setRoll2(roll2) === "string") {
      alert(round.setRoll2(roll2))
    } else {
      round.setRoll2(roll2)
      $("#input-roll-1, .first-roll .btn").prop("disabled", false)
      round.score()
      checkRoll2()
      $(".form-group.second-roll").toggleClass("d-none")
      $("#input-roll-1").val(null)
      $("#input-roll-2").val(null)
    }
  });

  $( ".third-roll .btn" ).click(function( event ) {
    roll3 = $("#input-roll-3").val()
    if (typeof round.setRoll3(roll3) === "string") {
      alert(round.setRoll3(roll3))
    } else {
      round.setRoll3(roll3)
      prevRound = bowlingScore.currRound - 1
      score = parseInt($(".round-" + prevRound + " .total").text())
      $(".round-bonus .plus").text(round.roll3)
      bowlingScore.bonusRound()
      $(".round-bonus .total").text(round.currentScore)
    }
  });

    printValue = function() {
      $(".round-" + bowlingScore.currRound + " .first-roll").text(round.roll1)
      $(".round-" + bowlingScore.currRound + " .second-roll").text(round.roll2)
      $(".round-" + bowlingScore.currRound + " .plus").text(round.plus)
      $(".round-" + bowlingScore.currRound + " .total").text(round.currentScore)
    }

});

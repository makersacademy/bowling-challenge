$(document).ready(function() {
  bowlingScore = new BowlingScore();

  startNewRound = function(i) {
    round = bowlingScore.newRound()
    console.log(round)
  }

  startNewRound()
  $("#current-round").text(bowlingScore.currRound)

  $( ".first-roll .btn" ).click(function( event ) {
    if (typeof round.setRoll1($("#input-roll-1").val()) === typeof "string") {
      alert(round.setRoll1($("#input-roll-1").val()))
    } else {
      round.setRoll1($("#input-roll-1").val())
      $("#input-roll-1, .first-roll .btn").prop("disabled", true)
    }
    if (round.roll1 === 10) {
      round.setPlus()
      round.score()
      console.log("inviare al database")
      console.log("visualizzare il database")
    } else {
      $(".second-roll").toggleClass("d-none")
    }
  });

  $( ".second-roll .btn" ).click(function( event ) {
    if (typeof round.setRoll2($("#input-roll-2").val()) === typeof "string") {
      alert(round.setRoll2($("#input-roll-2").val()))
    } else {
      round.setRoll2($("#input-roll-2").val())
    }
    if (round.roll2 === 10) {
      round.setPlus()
      round.score()
      console.log("inviare al database")
      console.log("visualizzare il database")
    }
    round.total()
    $("#input-roll-1, .first-roll .btn").prop("disabled", false)
    $(".second-roll").toggleClass("d-none")
    $("#input-roll-1").val(null)
    startNewRound()
    $("#current-round").text(bowlingScore.currRound)
  });

});

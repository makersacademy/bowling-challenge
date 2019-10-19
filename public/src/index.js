$(document).ready(function() {
  bowlingScore = new BowlingScore();

  startNewRound = function(i) {
    round = bowlingScore.newRound()
    console.log(round)
  }

  startNewRound()

  $( ".first-roll .btn" ).click(function( event ) {
    if (typeof round.setRoll1($("#input-roll-1").val()) === typeof "string") {
      alert(round.setRoll1($("#input-roll-1").val()))
    } else {
      round.setRoll1($("#input-roll-1").val())
      $("#input-roll-1, .first-roll .btn").prop("disabled", true)
    }
    if (round.roll1 === 10) {
      round.setPlus()
      round.total()
      console.log("inviare al database")
      console.log("visualizzare il database")
    }
  });

  $( ".second-roll .btn" ).click(function( event ) {
    console.log("second roll")
    startNewRound()
  });

});

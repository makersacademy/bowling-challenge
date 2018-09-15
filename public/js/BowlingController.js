$( document ).ready(function() {

  var bowlingModel = new BowlingModel();
  var table = document.getElementById("game");

  $( "input[type=button]" ).click(function( event ) {
    var pins = recordPins();
    bowlingModel.play(pins);
    game = bowlingModel.score()
    updateDisplay(game, pins);
    checkGameComplete(); // alert if game is complete
  });

  function recordPins() {
    var pinsString = $("input:text").val();
    return parseInt(pinsString, 10);
  };

  function updateDisplay(game, pins) {
    $("#current_score").text("Current total score: " + game.total)
    updateKnockedPins(pins);
    updateTable(game);
  };

  function updateKnockedPins(pins) {
    turn = bowlingModel.currentTurn();
    var tableRow = (turn.frame * 2) + (turn.roll - 2);
    var knockedPinsRow = table.rows[tableRow].cells;
    knockedPinsRow[2].innerHTML = pins;
  }

  function updateTable(currentGame) {
    var x = 0;
    for (var i = 2; i < 21; i +=2 ) {
      if (i === 20) {
        row = table.rows[i+1].cells; // format view correctly for 10th frame
      } else {
        row = table.rows[i].cells;
      }
      row[3].innerHTML = game.frameScores[x];
      x++;
    };
  }

  function checkGameComplete() {
    turn = bowlingModel.currentTurn()
    if (turn.frame === 10 && turn.roll === 3) {
      alert("Game complete");
    };
  };
});

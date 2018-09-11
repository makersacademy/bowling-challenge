$( document ).ready(function() {

  var bowlingModel = new BowlingModel();
  var game;
  var table = document.getElementById("game");
  var tableRow = 1;

  // user presses 'enter' on interface
  $( "input[type=button]" ).click(function( event ) {
    var pins = recordPins();
    game = bowlingModel.play(pins);
    updateDisplay(game, pins);
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
    var tableRow = (game.frame * 2) + (game.roll - 1) - 2;
    var knockedPinsRow = table.rows[tableRow].cells;
    knockedPinsRow[2].innerHTML = pins;
  }

  function updateTable(currentGame) {
    var x = 0;
    for (var i = 2; i < 21; i +=2 ) {
      row = table.rows[i].cells;
      row[3].innerHTML = game.scoresArray[x];
      x++;
    };
  }
});

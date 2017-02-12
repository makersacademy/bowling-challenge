$( document ).ready(function() {
  var game = new Game();
  var score = new Score();
  var bonus = new Bonus();
  $( '#addScore' ).click(function() { // to do: want to be able to enter by just pressing return as well as click
    var hits = parseInt($('#scoreBox').val());
    if (hits > game.getPins()) { hits = game.getPins()};
    // to do: need to catch hits > pins left probably in browser, as well as in model (currently doesin setPins not setHits)
    if (!game.isOver(bonus.getNextMultiplier())) {
      game.setPins(hits); // to do: mv game scoreCard; scoreCard has a score; then scoreCard.nextRow()
      score.setHits(hits); // to do: score has a bonusRecord
      score.setBonus(bonus.getNextMultiplier()); bonus.useBonuses(); // to do: mv bonus bonusRecord and put in score
      score.updateRollTotal(game.getFrame()); // to do: call in an  if within game(=scoreCard) then with true or false param
      score.updateRunningTotal();
      if (game.areNoPinsLeft() && game.getFrame() <= 10) {
        bonus.recordStrikeOrSpare(game.getRoll());
      };
      writeValues();
      $('#scoreBox').val(0);
      $('#scoreBox').focus(); // to do: doesn't get focus as I intended
      game.updateFrameRollAndPins();
    } else {
      gameOver();
    };
    // to do:
    //scoreCard.nextRow(hits)
    // writeValues()
    // $('#scoreBox').val(0);
    // scoreCard.getReady()
    // to do: stop game after 10 frames unless bonuses
  });

  function writeValues() {
    $("table").append("<tr>" +
    "<td>" + game.getFrame() + "</td>" +
    "<td>" + game.getRoll() + "</td>" +
    "<td></td>" +
    "<td>" + score.getHits() + "</td>" +
    "<td>" + score.getBonus() + "</td>" +
    "<td>" + bonus.getStrikeOrSpare() + "</td>" +
    "<td>" + score.getRollTotal() + "</td>" +
    "<td></td>" +
    "<td>" + score.getRunningTotal() + "</td>" +
    "</tr>");
  };

  function gameOver() {
    $('#info').text("Please refresh page to start a new game.")
  };
});

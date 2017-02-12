$( document ).ready(function() {
  var game = new Game();
  var score = new Score();
  var bonus = new Bonus();
  $('#scoreBox').val("");
  $('#scoreBox').focus();
  var rowCounter = 0;

  $('#addScore').click(addRow);
  $('html').keypress(function (e) {
   var key = e.which;
   if(key == 13) {addRow();}
  });

  function addRow() {
    if (game.isOver(bonus.getNextMultiplier())) {
      gameOver();
    } else {
      var hits = validate($('#scoreBox').val());
      setValues(hits);
      updateTotals();
      if (game.areNoPinsLeft() && game.getFrame() <= 10) {
        bonus.recordStrikeOrSpare(game.getRoll());
      };
      printValues();
      score.resetRollTotal();
      game.resetFrameRollAndPins();
      $('#scoreBox').val("");
      $('#scoreBox').focus();
      rowCounter++;
    };
  };

  function validate(input) {
    if (isNaN(input) || input === undefined || input == "") {return 0;}
    input = parseInt(input);
    if (input < 0) {return 0;}
    if (input > game.getPins()) {input = game.getPins();}
    return input;
  };

  function setValues(hits) {
    game.setPins(hits);
    score.setHits(hits);
    score.setBonus(bonus.getNextMultiplier());
    bonus.deleteUsedMultipliers();
  };

  function updateTotals() {
    if (game.getFrame() < 11) {score.addHitsToRollTotal();};
    score.addBonusToRollTotal();
    score.addRollTotalToRunningTotal();
  };

  function printValues() {
    var tr;
    (rowCounter % 2 == 1) ? tr = "<tr class='even'>" : tr = "<tr>";
    $("table").append(tr +
    "<td class='t-frame'>" + game.getFrame() + "</td>" +
    "<td class='t-roll'>" + game.getRoll() + "</td>" +
    "<td class='t-hits'>" + formattedHits() + "</td>" +
    "<td class='t-bonus'>" + formattedBonus() + "</td>" +
    "<td class='t-sors'>" + bonus.getStrikeOrSpare() + "</td>" +
    "<td class='t-rolltot'>" + score.getRollTotal() + "</td>" +
    "<td class='t-tot'>" + score.getRunningTotal() + "</td>" +
    "</tr>");
  };

  function formattedHits() {
    if (game.getFrame() < 11) {
      return score.getHits();
    } else {
      return "";
    }
  };

  function formattedBonus() {
    if (score.getBonus() > 0) {
      return "+" + score.getBonus();
    } else {
      return "";
    }
  };

  function gameOver() {
    $('#info').text("Refresh page to start a new game.")
  };

});

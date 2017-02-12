$( document ).ready(function() {
  var game = new Game();
  var score = new Score();
  var bonus = new Bonus();
  $('#scoreBox').val("");
  $('#scoreBox').focus();

  $('#addScore').click(addScore);
  $('html').keypress(function (e) {
   var key = e.which;
   if(key == 13) {addScore();};
  });

  function addScore() {
    if (game.isOver(bonus.getNextMultiplier())) {
      gameOver();
    } else {
      var hits = validate($('#scoreBox').val());
      game.setPins(hits);
      score.setHits(hits);
      score.setBonus(bonus.getNextMultiplier()); bonus.useBonuses();

      if (game.getFrame() < 11) {score.addHitsToRollTotal();};
      score.addBonusToRollTotal();
      score.addRollTotalToRunningTotal();
      if (game.areNoPinsLeft() && game.getFrame() <= 10) {
        bonus.recordStrikeOrSpare(game.getRoll());
      };

      printValues();
      score.resetRollTotal();
      game.resetFrameRollAndPins();

      $('#scoreBox').val("");
      $('#scoreBox').focus();
    };
  };

  function validate(input) {
    if (isNaN(input) || input === undefined || input == "") {return 0;}
    input = parseInt(input);
    if (input < 0) {return 0;}
    if (input > game.getPins()) {input = game.getPins();}
    return input;
  }

  function printValues() {
    $("table").append("<tr>" +
    "<td>" + game.getFrame() + "</td>" +
    "<td>" + game.getRoll() + "</td>" +
    "<td>" + score.getHits() + "</td>" +
    "<td>" + score.getBonus() + "</td>" +
    "<td>" + bonus.getStrikeOrSpare() + "</td>" +
    "<td>" + score.getRollTotal() + "</td>" +
    "<td>" + score.getRunningTotal() + "</td>" +
    "</tr>");
  };

  function gameOver() {
    $('#info').text("Refresh page to start a new game.")
  };

});

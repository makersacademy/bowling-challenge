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
    var hits;
    if ($('#scoreBox').val() == "") {
      hits = 0;
    } else {
      hits = parseInt($('#scoreBox').val());
    }
    if (hits > game.getPins()) { hits = game.getPins()};
    if (!game.isOver(bonus.getNextMultiplier())) {

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
    } else {
      gameOver();
    };
  };




  function printValues() {
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

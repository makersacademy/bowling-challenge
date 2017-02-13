use 'strict'

$( document ).ready(function() {
  var bowling = new Bowling();
  $('#scoreBox').val("");
  $('#scoreBox').focus();

  $('#addScore').click(bowling.addRow);

  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {addRow();
  }
});

function Bowling() {
  this.game = new Game();
  this.score = new Score();
  this.bonus = new Bonus();
  this.hits = 0;
  this.rowCounter = 0;
}
Bowling.prototype.addRow = function() {
  if (game.isOver(bonus.getNextMultiplier())) {
    gameOver();
  } else {
    this.hits = validate($('#scoreBox').val());
    this.setValues(this.hits);
    this.updateTotals();
    this.recordStrikeOrSpare();
    this.printValues();
    this.resetRow();
  }
}

Bowling.prototype.validate = function(input) {
  if (isNaN(input) || input === undefined || input == "") {return 0;}
  input = parseInt(input);
  if (input < 0) {return 0;}
  if (input > game.getPins()) {input = game.getPins();}
  return input;
}


Bowling.prototype.setValues = function(hits) {
  game.setPins(hits);
  score.setHits(hits);
  score.setBonus(bonus.getNextMultiplier());
  bonus.deleteUsedMultipliers();
}

Bowling.prototype.updateTotals = function() {
  if (game.getFrame() < 11) {score.addHitsToRollTotal();}
  score.addBonusToRollTotal();
  score.addRollTotalToRunningTotal();
}

Bowling.prototype.recordStrikeOrSpare = function() {
  if (game.areNoPinsLeft() && game.getFrame() <= 10) {
    bonus.recordStrikeOrSpare(game.getRoll());
  }
}

Bowling.prototype.printValues = function() {
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
}

Bowling.prototype.resetRow = function() {
  score.resetRollTotal();
  game.resetFrameRollAndPins();
  $('#scoreBox').val("");
  $('#scoreBox').focus();
  rowCounter++;
}

Bowling.prototype.formattedHits = function() {
  if (game.getFrame() < 11) {
    return score.getHits();
  } else {
    return "";
  }
}

Bowling.prototype.formattedBonus = function() {
  if (score.getBonus() > 0) {
    return "+" + score.getBonus();
  } else {
    return "";
  }
}

Bowling.prototype.gameOver = function() {
    $('#info').text("Refresh page to branstart a new game.")
  }
}

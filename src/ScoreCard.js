'use strict'

function ScoreCard() {
  this.game = new Game();
  this.score = new Score();
  this.bonus = new Bonus();
  this.rowCounter = 0;
}
ScoreCard.prototype.addRow = function() {
  if (this.game.isOver(this.bonus.getNextMultiplier())) {
    $('#info').text("Refresh page to start a new game.")
  } else {
    var hits = this.validate($('#scoreBox').val());
    this.processRow(hits);
  }
}

ScoreCard.prototype.processRow = function(hits) {
  this.setValues(hits);
  this.updateTotals();
  this.recordStrikeOrSpare();
  this.printValues();
  this.resetRow();
}

ScoreCard.prototype.validate = function(input) {
  if (isNaN(input) || input === undefined || input == "") {return 0;}
  input = parseInt(input);
  if (input < 0) {return 0;}
  if (input > this.game.getPins()) {input = this.game.getPins();}
  return input;
}

ScoreCard.prototype.setValues = function(hits) {
  this.game.setPins(hits);
  this.score.setHits(hits);
  this.score.setBonus(this.bonus.getNextMultiplier());
  this.bonus.deleteUsedMultipliers();
}

ScoreCard.prototype.updateTotals = function() {
  if (this.game.getFrame() < 11) {this.score.addHitsToRollTotal();}
  this.score.addBonusToRollTotal();
  this.score.addRollTotalToRunningTotal();
}

ScoreCard.prototype.recordStrikeOrSpare = function() {
  if (this.game.areNoPinsLeft() && this.game.getFrame() <= 10) {
    this.bonus.recordStrikeOrSpare(this.game.getRoll());
  }
}

ScoreCard.prototype.printValues = function() {
  var tr;
  (this.rowCounter % 2 == 1) ? tr = "<tr class='even'>" : tr = "<tr>";
  $("table").append(tr +
  "<td class='t-frame'>" + this.game.getFrame() + "</td>" +
  "<td class='t-roll'>" + this.game.getRoll() + "</td>" +
  "<td class='t-hits'>" + this.formattedHits() + "</td>" +
  "<td class='t-bonus'>" + this.formattedBonus() + "</td>" +
  "<td class='t-sors'>" + this.bonus.getStrikeOrSpare() + "</td>" +
  "<td class='t-rolltot'>" + this.score.getRollTotal() + "</td>" +
  "<td class='t-tot'>" + this.score.getRunningTotal() + "</td>" +
  "</tr>");
}

ScoreCard.prototype.resetRow = function() {
  this.score.resetRollTotal();
  this.game.resetFrameRollAndPins();
  $('#scoreBox').val("");
  $('#scoreBox').focus();
  this.rowCounter++;
}

ScoreCard.prototype.formattedHits = function() {
  if (this.game.getFrame() < 11) {
    return this.score.getHits();
  } else {
    return "";
  }
}

ScoreCard.prototype.formattedBonus = function() {
  if (this.score.getBonus() > 0) {
    return "+" + this.score.getBonus();
  } else {
    return "";
  }
}

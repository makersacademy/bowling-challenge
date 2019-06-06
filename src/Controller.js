var Game = require('./Game');
var View = require('./View');

function Controller() {
  this.game = new Game();
  this.view = new View(this);
}

Controller.prototype = {

  addBall: function(score) {
    this.game.recordBall(score);
    this.game.checkEndOfGame();
    this.game.addBonusScores();
  },

  totalScore: function() {
    return this.game.calculateTotal();
  },

  isGameOver: function() {
    return this.game.isComplete();
  },

  frameTotals: function() {
    return this.game.frameList.map(function(frame) {
      return frame.total;
    });
  },

  updateDOM: function(name, num, score) {
    this.view.updateTotals(name, num);
    this.view.updateReadOnly(name, num, score);
  }

}

module.exports = Controller;

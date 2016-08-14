'use strict';

function Game() {
  this.table = new ScoreTable();
}

Game.prototype = {
  play: function () {
    var pinsKnocked = this._roll(this.table.getPinsLeft());
    this.table.calculateRoll(pinsKnocked);
    return pinsKnocked;
  },

  _roll: function (pins) {
    return Math.floor(Math.random() * (1 + pins));
  },

  getScoreTable: function() {
    this.table.getScores();
  }
};

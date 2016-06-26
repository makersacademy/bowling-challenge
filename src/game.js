'use strict';

function Game() {
  this.frame = [];
  this.score = 0;
  this.scorecard = [];
  this.strikeBonus = false;
  this.spareBonus = false;
}

Game.prototype = {

  throw: function(number) {
    if (this.canThrow()) {
      this.frame.push(number);
      this.wasStrikeScored(number);
    } else {
      this.frame.push(number);
      this.wasSpareScored();
      this.endFrame();
    }
  },

  endFrame: function() {
    this.scorecard.push(this.frame);
    this.updateScore();
    this.frame = [];
  },

  canThrow: function() {
    if (this.frame.length === 0) {
      return true;
    }
  },

  wasStrikeScored: function(number) {
    if (number === 10) {
      this.endFrame();
      this.strikeBonus = true;
    }
  },

  wasSpareScored: function(number) {
    if (number + this.frame[0] === 10) {
      this.spareBonus = true;
    }
  },

  updateScore: function() {
    for(var  i = 0; i < this.frame.length; i++) {
      this.score += this.frame[i]
    }
  },


};

module.exports = Game;

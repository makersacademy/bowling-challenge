'use strict';

function Game() {
  this.frame = [];
  this.totalScore = 0;
  this.frameScore = 0
  this.frameScores = [];
  this.scorecard = [];
  this.strikeBonus = false;
  this.spareBonus = false;
}

Game.prototype = {

  throw: function(number) {
    if (this.firstThrow()) {
      this.frame.push(number);
      this.perfectRoll(number);
    } else {
      this.frame.push(number);
      this.endFrame();
    }
  },

  endFrame: function() {
    this.scorecard.push(this.frame);
    this.endOfGame();
    this.frame = [];
  },

  firstThrow: function() {
    if (this.frame.length === 0) {
      return true;
    }
  },

  perfectRoll: function(number) {
    if (number === 10) {
      this.strikeBonus = true;
      this.endFrame();
    }
  },

  caclulateScore: function(number) {
    
  },

  endOfGame: function(number) {
    if (this.scorecard.length === 10) {
      this.bonus()
      this.frame = nil
      console.log("Game finished")
    }
  },

  bonus: function(number) {
    
  }


};

module.exports = Game;

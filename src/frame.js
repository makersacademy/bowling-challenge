function Frame(n) {
  this.nth = n;
  this.pins = 10;
  this.firstScore;
  this.secondScore;
  this.scores = 0;
};
Frame.prototype = {
  number: function(){
    return this.nth;
  },
  firstRoll: function(rollOne) {
    this.firstScore = rollOne
    this.pins -= this.firstScore
    this.scores = 10 - this.pins

  },

  secondRoll: function(rollTwo) {
    this.secondScore = rollTwo
    this.pins -= this.secondScore
    this.scores = 10 - this.pins
  },
  getScores: function() {
    return this.scores;
  },

  isSpare: function() {
    if (this.firstScore != 10 && this.pins == 0) {
      return true;
    } else {
      return false;
    }
  },

  isStrike: function() {
    return this.firstScore ===10;
  },
};

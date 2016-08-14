function Frame(n) {
  this.nth = n;
  this.pins = 10;
  this.firstScore;
  this.secondScore;
  this.thirdScore;
  this.scores = 0;
};
Frame.prototype = {
  number: function(){
    return this.nth;
  },
  firstRoll: function(rollOne) {
    this.firstScore = rollOne;
    this.pins -= this.firstScore;
    this.scores += this.firstScore;

  },

  secondRoll: function(rollTwo) {
    this.secondScore = rollTwo;
    this.pins -= this.secondScore;
    this.scores += this.secondScore;
  },

  thirdRoll: function(rollThree){
    if (this.nth == 10 &&this.isSpare() || this.nth == 10 && this.isStrike()) {
      this.pins = 10;
      this.thirdScore = rollThree;
      this.pins -= this.thirdScore;
      this.scores += this.thirdScore;
    }
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

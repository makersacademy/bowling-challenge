var lodash = require('lodash')

var Frame = function(rolls){
    this.MAXIMUM_SCORE = 10;
    this.rolls = rolls;
  };

  Frame.prototype.total = function(next_frame, next_to_next_frame) {
    return this.rollScore() + this.bonus(next_frame, next_to_next_frame);
  };

  Frame.prototype.bonus = function(next_frame, next_to_next_frame) {
    if (undefined === next_frame) {
      return 0;
    }
    if(this.isStrike()) {
      return next_frame.strikeBonus(next_to_next_frame);
    }
    if(this.isSpare()) {
      return next_frame.spareBonus();
    }
  }

  Frame.prototype.isSpare = function(){
    return this.rollScore() == this.MAXIMUM_SCORE
  }

  Frame.prototype.spareBonus = function() {
    return this.firstRoll();
  }

  Frame.prototype.isStrike = function(){
    return this.rollScore == this.MAXIMUM_SCORE;
  }

  Frame.prototype.firstRoll = function(){
    return this.rolls[0];
  }

  Frame.prototype.rollScore = function(){
    return this.rolls.reduce((score, roll) => {
      console.log(score);
      console.log(roll);
      return score + roll; 
    });
  }

module.exports = Frame;
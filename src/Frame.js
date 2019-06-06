// 'use strict';

function Frame(){
  this.balls = [];
  this.completed = false;
  this.STRIKE = 10;
  this.total = 0;
}

Frame.prototype = {

  recordScore: function(score, lastRound = false){

    // Change to first update completed and then only push if not complete
    if (this.completed === false) {
      this.balls.push(score);
      this.total += score;
      if (score === this.STRIKE && lastRound !== true) { this.completed = true; }
      if (this.balls.length === 2){
        if (lastRound === false) {
          this.completed = true;
        }
        else if (this.balls[0] + this.balls[1] < 10) {
           this.completed = true;
        }
      }
      if (this.balls.length === 3){
        this.completed = true;
      }
    }
    return this;
  },

  isComplete:  function() {
    return this.completed;
  },

  firstBall: function() {
    return this.balls[0];
  },

  secondBall: function() {
    return this.balls[1];
  },

  isStrike: function () {
    if(this.balls.length === 1 && this.firstBall() === 10 && this.total === 10) { return true; }
    else { return false };
  },

  isSpare: function() {
    let frameScore = this.balls.reduce(function(total, ball) { return total += ball; }, 0);

    if(this.balls.length === 2 && frameScore === 10 && this.total === 10) { return true; }
    else { return false };
  }
};

// module.exports = Frame;

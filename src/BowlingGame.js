"use strict";

class BowlingGame{

  constructor(){
  this.TOTAL_PINS = 10;
  this.rolls = [];
  this.roll_number = 0;
  };

  bowl = function(pins) {
    if(pins > this.TOTAL_PINS) {
      return 'Invalid score, please try again.';
    }
    else if(this.roll_number % 2 === 0){
      this.frame = []
      this.frame.push(pins)
    }
    else {
      this.frame.push(pins)
      this.rolls.push(this.frame)
    }
    this.roll_number += 1;
  };

  score = function() {
    let score = 0;
    let game_length = this.rolls.length;
    for(var i = 0; i < game_length; i++) {
      if(this.rolls[i][0] + this.rolls[i][1] === this.TOTAL_PINS){
        score += 10 + this.rolls[i+1][0];
      }
      else{
        score += this.scoreFrame(i);
      }
    };
    return score;
  };

  scoreFrame = function(frame) {
    return this.rolls[frame][0] + this.rolls[frame][1];
  }
};

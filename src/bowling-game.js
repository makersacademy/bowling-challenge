'use strict';

class Game {

    constructor() {
       this.totalScore = 0;
       this.spare = false;
       this.strike = false;
       this.currentFrame = 1;
    };

    calculateFrameScore(roll_1, roll_2) {
      if(this.strike === true) {
        return (roll_1 + roll_2) * 2
      }
      else if(this.spare === true) {
        return (roll_1 * 2) + roll_2
      }
      else {
        return roll_1 + roll_2
      }
    };

    strikeIdentifier(roll_1) {
      if(roll_1 === 10) {
        this.strike = true
      }
      else {
        this.strike = false
      }
    };

    spareIdentifier(roll_1, roll_2) {
      if(roll_1 + roll_2 === 10) {
        this.spare = true
      }
      else {
        this.spare = false
      }
    };
};
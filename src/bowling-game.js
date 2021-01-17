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
        return ((roll_1 + roll_2) * 2)
      }
      else if(this.spare === true) {
        return ((roll_1 * 2) + roll_2)
      }
      else {
        return (roll_1 + roll_2)
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

    playAFrame(roll_1, roll_2) {
      if(roll_1 === 10) {
        roll_2 = 0    
      }

      var frameScore = this.calculateFrameScore(roll_1, roll_2)
      this.totalScore += frameScore 
      
      this.strikeIdentifier(roll_1)
      this.spareIdentifier(roll_1, roll_2)
      this.extraBonusRound
    };

    extraBonusRound(roll_1, roll_2) {
      if(this.currentFrame === 10 && this.strike === true) {
        var extraBonusPoints = roll_1 + roll_2
      }
      else if(this.currentFrame === 10 && this.spare === true) {
        var extraBonusPoints = roll_1
      }
      else {
        var extraBonusPoints = 0
      }
      this.totalScore += extraBonusPoints
    }
};
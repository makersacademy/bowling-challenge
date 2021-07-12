'use strict';

class Scorecard {
  constructor() {
    this.score = 0;
    this.firstRollScore = 0;
    this.secondRollScore = 0;
    this.frame = new Frame;
  }

  firstRoll(roll) {
    this.firstRollScore = roll
    this.rollError();
    this.score += roll;
  }

  secondRoll(roll) {
    this.secondRollScore = roll
    this.rollError();
    this.score += roll;
    this.endOfRolls();
  }  

  rollError() {
    if (this.firstRollScore + this.secondRollScore > 10) {
      throw ("Roll is higher than 10"); 
    }
  }

  endOfRolls() {
    if (this.frame.isFinalFrame()) {
      return ('Game over, your score was ' + (this.score) + ', well done!');
    }
    this.frame.endOfFrame();
  }



}
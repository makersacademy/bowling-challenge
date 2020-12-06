'use strict';

class Game {

  constructor() {
    this.frameNumber = 1;
    this.pins = 10;
    this.rollNumber = 2;
    this.playerScore = 0;
    this.rollScore = 0;
  };

  isLastRoll() {
    if(this.rollCount == 0 && this.frameCount != 10 || this.pins == 0) {
      this.frameCount += 1;
      this.rollCount = 2;
      this.pins = 10;
    };
  };

  isAWrongRoll(score) {
    if((this.pins - score) < 0 || score < 0) throw new Error('Invalid roll');
  };

  roll(score) {
    this.isLastRoll();
    this.isAWrongRoll(score);
    this.rollScore = score;
    this.pins -= score;
    this.scoreCalculator(score);
    this.rollNumber --;
  };

  isAStrike() {
    return (this.rollNumber == 2 && this.rollScore == 10)
  };

  isASpare() {
    return (this.rollNumber == 1 && this.pins == 0)
  };

  score() {
    return this.playerScore;
  };

  scoreCalculator(score) {
    // if(this.isAStrike()) this.playerScore += score +100;
    // if(this.isASpare()) this.playerScore += score +50
    this.playerScore += score;
  };
};

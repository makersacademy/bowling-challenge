'use strict';

class Bowling{
  constructor() {
    this.current_score = 0;
    this.bonus1 = -1;
    this.bonus2 = -1;
    this.bonus1Amount = 0;
    this.bonus2Amount = 0;
    this.pinsRemaining = 10;
    this.firstShot = true;
  }

  getCurrentScore() {
    return this.current_score;
  }

  add(pins) {
    this.handleBonus1(pins);
    this.handleBonus2(pins);
    this.current_score += pins;
    this.pinsRemaining -= pins;
    this.checkForSpareStrike();
    this.swapRound();
  };

  handleBonus1(pins) {
    if(this.bonus1 > 0) {
      this.bonus1Amount += pins;
      this.bonus1 -= 1;
      if(this.bonus1 == 0) {
        this.bonus1 = -1;
        this.current_score += this.bonus1Amount;
        this.bonus1Amount = 0;
      }
    }
  };

  handleBonus2(pins) {
    if(this.bonus2 > 0) {
      this.bonus2Amount += pins;
      this.bonus2 -= 1;
      if(this.bonus2 == 0) {
        this.bonus2 = -1;
        this.current_score += this.bonus2Amount;
        this.bonus2Amount = 0;
      }
    }
  };

  checkForSpareStrike() {
      if (this.pinsRemaining == 0 && this.firstShot == true) {
        if(this.bonus1 == -1) { this.bonus1 = 2; }
        else { this.bonus2 = 2; }
        this.pinsRemaining = 10;
        return;
      }
      else if (this.pinsRemaining == 0) {
        if(this.bonus1 == -1) { this.bonus1 = 1; }
        else { this.bonus2 = 1; }
      }
  }

  swapRound() {
    if(this.firstShot == true && this.pinsRemaining != 10) {
      this.firstShot = false;
    }
    else {
      this.firstShot = true;
      this.pinsRemaining = 10;
    }
  }
};

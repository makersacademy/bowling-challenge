'use strict';

class Game {

  constructor() {
    this.frameNumber = 1;
    this.pins = 10;
    this.rollNumber = 2;
    this.playerScore = 0;
    this.rollScore = 0;
    this.firstRolls = [];
    this.secondRolls = [];
    this.spareBonus = false
    this.strikeBonus = false
    this.doubleStrikeBonus = false
  };

  isLastRoll() {
    if(this.rollNumber == 0 && this.frameNumber != 10 || this.pins == 0) {
      this.frameNumber += 1;
      this.rollNumber = 2;
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
    this.rollCalculator(score);

    if (this.spareBonus) {
      this.playerScore += this.calculateSpareBonus()
    }

    if (this.strikeBonus && this.rollNumber == 1) {
      this.playerScore += this.calculateStrikeBonus()
    }

    this.scoreCalculator(score);

    if (this.doubleStrikeBonus) {
      this.playerScore += this.calculateDoubleStrikeBonus()
    }

    this.rollNumber --;
  };

  rollCalculator(score) {
  if(this.rollNumber == 2 && score == 10) {
    this.firstRolls.push(score)
    this.secondRolls.push(0)
  } else if(this.rollNumber == 2) {
    this.firstRolls.push(score)
  } else if(this.rollNumber == 1) {
    this.secondRolls.push(score)
  };
};

  isAStrike() {
    return (this.rollNumber == 2 && this.rollScore == 10);
  };

  isADoubleStrike() {
    return (this.rollNumber == 2 && this.rollScore == 10 && this.strikeBonus == true)
  }

  isASpare() {
    return (this.rollNumber == 1 && this.pins == 0);
  };

  calculateStrikeBonus() {
    return this.firstRolls[this.frameNumber-1] + this.secondRolls[this.frameNumber-1]
  };

  calculateDoubleStrikeBonus() {
    return this.firstRolls[this.frameNumber-1] + this.firstRolls[this.frameNumber-2]
  }

  calculateSpareBonus() {
    return this.firstRolls[this.frameNumber-1]
  };

  score() {
    return this.playerScore;
  };

  scoreCalculator(score) {
    if (this.isADoubleStrike()) {
      this.doubleStrikeBonus = true
      this.playerScore += score;
    } else if(this.isAStrike()) {
      this.strikeBonus = true
      this.playerScore += score;
    } else if (this.isASpare()) {
      this.spareBonus = true
      this.playerScore += score;
    } else {
      if (this.rollNumber == 1) {
        this.strikeBonus = false
      }
      this.doubleStrikeBonus = false
      this.spareBonus = false
      this.playerScore += score;
    }
  };
};

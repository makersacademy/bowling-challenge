'use strict'

class Game {
  constructor() {
    this.bonus = {};
    this.rolls = [];
    this.maxRolls = 21;
    this.frames = [new Frame(1)];
  };

  roll(pins) {

    if (this.gameInProgress()) {

      this.logRoll(pins);
      this.checkIfBonus()
    
      if (this.currentFrame().isComplete()) {
        this.frames.push(new Frame(this.frames.length + 1));
      };
      
    };
    
    if (this.gameIsOver()) {
      console.log(this.frames);
      console.log('GAME OVER! Thanks for playing!')
    };

  }

  currentFrame() {
    return this.frames[this.frames.length - 1];
  };

  currentRoll() {
    return this.rolls.length;
  };

  currentRollScore() {
    return this.rolls[this.currentRoll() - 1];
  };

  currentGameScore() {
    let score = 0;
    this.frames.forEach( frame => {
      score += frame.id <= 10 ? frame.score() : 0;
    })
    return score;
  }

  logRoll(pins) {

    this.rolls.push(pins);
    this.currentFrame().addRoll(pins);
    this.carryBonusToPrevFrames();

    if (this.currentFrame().isLastFrame()) {
      if (this.currentFrame().isStrike()) {
        this.maxRolls = this.rolls.length + 2;
      } else if (this.currentFrame().isSpare()) {
        this.maxRolls = this.rolls.length + 1;
      } else if (this.currentFrame().rolls.length === 2) {
        this.maxRolls = this.rolls.length;
      };
    };

  };

  checkIfBonus() {
    if (this.currentFrame().isStrike() || this.currentFrame().isSpare()) {
      if (this.bonus[this.rolls.length + 1]) {
        this.bonus[this.rolls.length + 1].push(this.frames.length);
      } else {
        this.bonus[this.rolls.length + 1] = [this.frames.length];
      };
    };

    if (this.currentFrame().isStrike()) {
      if (this.bonus[this.rolls.length + 2]) {
        this.bonus[this.rolls.length + 2].push(this.frames.length);
      } else {
        this.bonus[this.rolls.length + 2] = [this.frames.length];
      };
    };
  };

  carryBonusToPrevFrames() {
    let applyBonusToFrame = this.bonus[this.currentRoll()];
    if (applyBonusToFrame) {

      applyBonusToFrame.forEach(frame => {
        this.frames[frame - 1].bonus += this.currentRollScore();
      });
    };
  };

  gameIsOver() {
    return this.rolls.length === this.maxRolls;
  };

  gameInProgress() {
    return !this.gameIsOver();
  };

  displayFrameRolls(frameID) {
    let displayRolls = "";
    let traverseFrames = [this.frames[frameID - 1]];

    if (frameID === 10) {
      if (this.frames[10].rolls.length > 0) {
        traverseFrames.push(this.frames[10]);
      };
      if (this.frames[11] && this.frames[11].rolls.length > 0) {
        traverseFrames.push(this.frames[11]);
      };
    };

    console.log(traverseFrames);

    traverseFrames.forEach(frame => {
      if (frame.isStrike()) {
        displayRolls += "X"
      } else if (frame.isSpare()) {
        displayRolls += `${frame.rolls[0]}/`;
      } else {
        displayRolls += `${frame.rolls[0]}${frame.rolls[1]}`;
      };
    })

    return displayRolls;
  };

};
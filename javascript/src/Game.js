class Frame{
  constructor(){
    this.rolls = [];
    this.score = 0;
  };

  getScore(){
    return this.score;
  };

  getRolls(){
    return this.rolls;
  };

  addRoll(roll, game){
    if (isNaN(roll)) {
      throw new Error("You must input a number from 1 to 10.")
    }
    if ((this.score + roll > 10) && !game.finalFrame()) {
      throw new Error("There are only 10 pins in a frame!")
    }
    this.rolls.push(roll);
    this.score += roll;
  };

  isStrike(){
    return this.rolls[0] === 10;
  }

  isSpare(){
    return !this.isStrike() && this.rolls[0] + this.rolls[1] === 10;
  }

};

class Game{
  constructor(){
    this.frames = [];
    this.totalScore = 0;
  };

  getTotalScore() {
    return this.totalScore
  };

  getFrames(){
    return this.frames;
  };

  addFrame(frame){
    if (this.frames.length > 0) {
      this.bonuses(frame);
    };
    if (this.frames.length >= 2) {
      this.secondStrikeBonus(frame);
    }
    this.frames.push(frame);
    this.totalScore += frame.score;
  };

  finalFrame(){
    return (this.frames.length === 9);
  }

  calculateStrikeBonus(previous_frame, next_frame){
    let bonus
    if (next_frame.rolls.length > 2) {
      bonus = next_frame.rolls[0] + next_frame.rolls[1];
    } else {
      bonus = next_frame.score }
    previous_frame.score += bonus;
    this.totalScore += bonus;
  }

  calculateSpareBonus(previous_frame, next_frame){
    let bonus = next_frame.rolls[0];
    previous_frame.score += bonus;
    this.totalScore += bonus;
  };

  secondStrikeBonus(frame) {
    let lastFrame = this.frames[this.frames.length - 1]
    let previousFrameButOne = this.frames[this.frames.length - 2]
    if (previousFrameButOne.isStrike() && lastFrame.isStrike())
    this.calculateSecondStrikeBonus(previousFrameButOne, frame);
  }

  calculateSecondStrikeBonus(previousFrameButOne, nextFrame){
    let bonus = nextFrame.rolls[0];
    previousFrameButOne.score += bonus;
    this.totalScore += bonus;
  };

  bonuses(frame){
    let lastFrame = this.frames[this.frames.length - 1]
    if (lastFrame.isStrike()) {
      this.calculateStrikeBonus(lastFrame, frame);
    };
    if (lastFrame.isSpare()) {
    this.calculateSpareBonus(lastFrame, frame);
    };
  };

  finalMessage(){
    if(this.getTotalScore() === 0) {
      return `Your game is finished! You scored ${this.totalScore}. Oh dear, that's a gutter game :(`;
    }
    if(this.getTotalScore() === 300) {
      return `Your game is finished! You scored ${this.totalScore}. You bowled the PERFECT GAME!`;
    }
    else {
      return `Your game is finished! You scored ${this.totalScore}.`;
    };
  };


};

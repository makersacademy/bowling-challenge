class ScoreCard{

  constructor(Frame){
    this.frames = {};
    this.initFrames(Frame);
    this.currentFrame = this.frames.frame1;
    this.gameOver = false;
  }

  initFrames(Frame) {
    for(let i = 1; i <= 10; i++){
      this.frames[`frame${i}`] = new Frame(i);
    }
  }

  roll(pins) {
    if (this.gameOver) {throw "Game is over!"}
    this.currentFrame.roll(pins);
    this.currentFrame = this.getCurrentFrame();
  }

  getCurrentFrame() {
    let nextFrame = this.frames[`frame${this.currentFrame.number + 1}`];
    if (this.currentFrame === this.frames.frame10 && this.currentFrame.isComplete()) {
      this.gameOver = true;
      return this.currentFrame;
    } else {
    return this.currentFrame.isComplete() ? nextFrame : this.currentFrame;
    }
  }

  getScore(frame) {
    return frame.getScore() + this.getBonus(frame);
  }

  getBonus(frame) {
    if (frame.isSpare) {
      return this.spareBonus(frame);
    } else if (frame.isStrike) {
      return this.strikeBonus(frame);
    } else {
      return 0;
    }
  }

  spareBonus(frame) {
    let bonus = this.frames[`frame${frame.number + 1}`].rolls[0];
    return frame.number === 10 ? 0 : bonus;
  }

  strikeBonus(frame) {
    
    switch (frame.number) {
      case 10:
        return 0;

      case 9:
        return this.ninthFrameBonus(frame);
    
      default:
        return this.regularFrameBonus(frame);
    }
  }

  ninthFrameBonus(frame) {
    let firstRoll = this.frames.frame10.rolls[0];
    let secondRoll = this.frames.frame10.isStrike ? this.frames.frame10.rolls[2] : this.frames.frame10.rolls[1];
    return firstRoll + secondRoll;
  }

  regularFrameBonus(frame) {
    let nextFrame = this.frames[`frame${frame.number + 1}`];
    let nextNextFrame = this.frames[`frame${frame.number + 2}`]
    let firstRoll = nextFrame.rolls[0];
    let secondRoll = nextFrame.isStrike ? nextNextFrame.rolls[0] : nextFrame.rolls[1];
    return firstRoll + secondRoll;
  }

}

module.exports = ScoreCard;

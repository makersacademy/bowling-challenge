const Scorecard = require('./Scorecard');

class Game {
  constructor(scorecard) {
    this.scorecard = new Scorecard;
    this.currentFrame = null;
    this.frameScore = null;
    this.frameThrow1 = null;
    this.frameThrow2 = null;
    this.frameThrow3 = null;
    this.frameBonusType = null;
  }

  setCurrentFrame(frame) {
    this.currentFrame = frame;
  }
  
  // how could we dynamically change the frame number?
  throw1(pins) {
    this.frameThrow1 = pins;
  }

  throw2(pins) {
    this.frameThrow2 = pins;
  }

  throw3(pins) {
    this.frameThrow3 = pins;
  }

  // without frame 10 scoring logic
  setThrowsTotalScore() {
    this.frameScore = this.frameThrow1 + this.frameThrow2;
  }

  // for use when bonus points awarded
  updateFrameScore(points) {
    this.frameScore = points;
  }

  setFrameBonusType() {
    if (this.frameThrow1 === 10) {
      this.frameBonusType = 'strike';
    } else if (this.frameThrow1 + this.frameThrow2 === 10) {
      this.frameBonusType = 'spare';
    } else if (this.frameThrow1 + this.frameThrow2 < 10) {
      this.frameBonusType = 'none';
    };
  }
};

module.exports = Game;

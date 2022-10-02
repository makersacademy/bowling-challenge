const Frame = require('./Frame');

class Scorecard {
  constructor() {
    this.frame1 = new Frame();
    this.frame2 = new Frame();
    this.frame3 = new Frame();
    this.frame4 = new Frame();
    this.frame5 = new Frame();
    this.frame6 = new Frame();
    this.frame7 = new Frame();
    this.frame8 = new Frame();
    this.frame9 = new Frame();
    this.frame10 = new Frame();
    this.currentFrame = 0;
  }
  
  // refactor - reduce repetition
  setCurrentFrame(frame) {
    if (frame === 1) {
      this.currentFrame = this.frame1;
      this.previousFrame = null;
    } else if (frame === 2) {
      this.currentFrame = this.frame2;
      this.previousFrame = this.frame1;
    } else if (frame === 3) {
      this.currentFrame = this.frame3;
      this.previousFrame = this.frame2;
    } else if (frame === 4) {
      this.currentFrame = this.frame4;
      this.previousFrame = this.frame3;
    } else if (frame === 5) {
      this.currentFrame = this.frame5;
      this.previousFrame = this.frame4;
    } else if (frame === 6) {
      this.currentFrame = this.frame6;
      this.previousFrame = this.frame5;
    } else if (frame === 7) {
      this.currentFrame = this.frame7;
      this.previousFrame = this.frame6;
    } else if (frame === 8) {
      this.currentFrame = this.frame8;
      this.previousFrame = this.frame7;
    } else if (frame === 9) {
      this.currentFrame = this.frame9;
      this.previousFrame = this.frame8;
    } else if (frame === 10) {
      this.currentFrame = this.frame10;
      this.previousFrame = this.frame9;
    }
  }
  
  throw1(pins) {
    this.currentFrame.scoreThrow1 = pins;
  }

  throw2(pins) {
    this.currentFrame.scoreThrow2 = pins;
  }

  // for frame 10
  throw3(pins) {
    this.currentFrame.scoreThrow3 = pins;
  }

  // versatile method
  updateCurrentFrameScore(points) {
    this.currentFrame.score = points;
  }

  updatePreviousFrameScore() {
    if (this.previousFrame.strike) {
      this.previousFrame.score += (
        this.currentFrame.scoreThrow1 + 
          this.currentFrame.scoreThrow2
      );
    } else if (this.previousFrame.spare) {
      this.previousFrame.score += (
        this.currentFrame.scoreThrow1
      );
    }
  }

  updateFrame10ScoreThrow3() {
    if (this.currentFrame.strike) {
      this.currentFrame.score += (
        this.currentFrame.scoreThrow2 +
          this.currentFrame.scoreThrow3
      ); 
    } else if (this.currentFrame.spare) {
      this.currentFrame.score += (
        this.currentFrame.scoreThrow3
      );
    }
  }

  setCurrentFrameBonus() {
    this.currentFrame.setBonus();
  }
};

module.exports = Scorecard;

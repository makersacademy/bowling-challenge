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
  
  setCurrentFrame(frame) {
    
    // set up so frame instance is only set once!
    if (frame === 1) {
      this.currentFrame = this.frame1;
    } else if (frame === 2) {
      this.currentFrame = this.frame2;
    } else if (frame === 3) {
      this.currentFrame = this.frame3;
    } else if (frame === 4) {
      this.currentFrame = this.frame4;
    } else if (frame === 5) {
      this.currentFrame = this.frame5;
    } else if (frame === 6) {
      this.currentFrame = this.frame6;
    } else if (frame === 7) {
      this.currentFrame = this.frame7;
    } else if (frame === 8) {
      this.currentFrame = this.frame8;
    } else if (frame === 9) {
      this.currentFrame = this.frame9;
    } else if (frame === 10) {
      this.currentFrame = this.frame10;
    }
  }
  
  throw1(pins) {
    this.currentFrame.scoreThrow1 = pins
  }

  throw2(pins) {
    this.currentFrame.scoreThrow2 = pins
  }

  updateFrameScore(points) {
    this.currentFrame.score = points;
  }

  setFrameBonusType() {
    this.currentFrame.setBonus();
  }
  



  // // reserved for frame 10 logic
  // throw3(pins) {

  // }
  

};

module.exports = Scorecard;

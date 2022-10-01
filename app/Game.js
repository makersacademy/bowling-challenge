const Scorecard = require('./Scorecard');

class Game {
  constructor(scorecard) {
    this.scorecard = new Scorecard;
    this.currentFrame = null;
  }

  setCurrentFrame(frame) {
    this.currentFrame = frame;
  }
  
  throw1(pins) {
    // either need to use if statements or 
    // how could we dynamically change the frame number here
    this.scorecard.frame1.scoreThrow1 = pins;
  }

  throw2(pins) {
    this.scorecard.frame1.scoreThrow2 = pins;
  }
};

module.exports = Game;

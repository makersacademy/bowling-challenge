const Frame = require('./Frame');

class Scorecard {
  constructor() {
    this.frame0 = new Frame(0);
    this.frame1 = new Frame(1);
    this.frame2 = new Frame(2);
    this.frame3 = new Frame(3);
    this.frame4 = new Frame(4);
    this.frame5 = new Frame(5);
    this.frame6 = new Frame(6);
    this.frame7 = new Frame(7);
    this.frame8 = new Frame(8);
    this.frame9 = new Frame(9);
    this.frame10 = new Frame(10);
    this.currentFrame = 0;
    this.gameTotalScore = 0;

    this.allFrames = [
      this.frame0,
      this.frame1,
      this.frame2,
      this.frame3,
      this.frame4,
      this.frame5,
      this.frame6,
      this.frame7,
      this.frame8,
      this.frame9,
      this.frame10
    ];
  }
  
  // refactor - reduce repetition
  // could use the allFrames array?
  setCurrentFrame(frame) {
    if (frame === 1) {
      this.currentFrame = this.frame1;
    } if (frame === 2) {
      this.currentFrame = this.frame2;
    } if (frame === 3) {
      this.currentFrame = this.frame3;
    } if (frame === 4) {
      this.currentFrame = this.frame4;
    } if (frame === 5) {
      this.currentFrame = this.frame5;
    } if (frame === 6) {
      this.currentFrame = this.frame6;
    } if (frame === 7) {
      this.currentFrame = this.frame7;
    } if (frame === 8) {
      this.currentFrame = this.frame8;
    } if (frame === 9) {
      this.currentFrame = this.frame9;
    } if (frame === 10) {
      this.currentFrame = this.frame10;
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

  // total of all throws for a single frame, no bonus points
  setCurrentFrameScore() {
    this.currentFrame.setScore();
  }

  // eventually change this to set bonus type for all frames
  setCurrentFrameBonus() {
    this.currentFrame.setBonus();
  }

  // will need to adjust this for frames 9 and 10
  awardBonusAllFrames() {
    this.allFrames.forEach((frame) => {
      const frameIndex = this.allFrames.indexOf(frame);
      const nextFrame = this.allFrames[(frameIndex + 1)]
      const nextNextFrame = this.allFrames[(frameIndex + 2)]

      if (frame.strike) {
        if (nextFrame.strike) {
          frame.bonusScore += nextFrame.scoreThrow1 + nextNextFrame.scoreThrow1;
        } else {
          frame.bonusScore += nextFrame.scoreThrow1 + nextFrame.scoreThrow2;
        }
      } else if (frame.spare) {
        frame.bonusScore += nextFrame.scoreThrow1;
      }
    })
  }

  setAllFramesTotalScores() {
    this.allFrames.forEach((frame) => {
      frame.setTotalScore();
    })
  }

  // add method for dealing with frame 10 logic

  // can be used at any given point in game
  getGameTotalScore() {
    this.allFrames.forEach((frame) => {
      this.gameTotalScore += frame.score;
    })
    return this.gameTotalScore;
  }

  // method for returning current score for specified frame?

  // versatile utility method - may not be needed
  updateCurrentFrameScore(points) {
    this.currentFrame.score = points;
  }
};

module.exports = Scorecard;

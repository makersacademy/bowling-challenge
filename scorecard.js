var lodash = require('lodash');

class Scorecard {

  constructor(frames) {
    this.frames = frames
  }

  finalScore() {
    let finalScoreCard = 0
    let merge = this.frames.flat(1)
    let sum = lodash.sum(merge);
    finalScoreCard += sum
      this.frames.forEach((frame, index) => {
        finalScoreCard += this.strikeBonus(index)
        finalScoreCard += this.spareBonus(index)
    });

    return finalScoreCard
  };

  
  private

  isStrike(frame) {
    if (frame[0] === 10) {
      return true
    }
  };

  strikeBonus(index) {
    if (index === 9) {
      return 0
    } else if (!(this.isStrike(this.frames[index]))) {
      return 0
    }

    let nextFrame = this.frames[index + 1]
    let finalFrame = this.frames[9]

    if (this.isStrike(nextFrame) === true ) {
      return (nextFrame[0] + finalFrame[0])
    } else if (this.isStrike(this.frames[index]) === true ) {
      return lodash.sum(nextFrame)
    }
  };

  isSpare(frame) {
    if (frame.length > 1 && frame[0] + frame[1] == 10) {
      return true
    }
  };

  spareBonus(index) {
    if (index === 9) {
      return 0
    }

    let nextFrame = this.frames[index + 1][0]
    
      if (this.isSpare(this.frames[index]) === true ) {
        return nextFrame
    } else
        return 0
    };
}

module.exports = Scorecard;
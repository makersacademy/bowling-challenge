const Frame = require('./frame');

class BowlingGame {
  constructor() {
    this.frames = [];
  }

  play() {
    for (let i = 1; i<=10; i++) {
      const currentFrame = this.playFrame(i);
      this.frames.push(currentFrame);
      if (i < 3) {
        continue;
      }
      if (this.frames.at(-1).isSpare()) {
        this.frames.at(-2).frameScores.push(this.frames.at(-1).frameScores[0]);
      }
      let frameIndex = this.frames.length-2;
      while (frameIndex > 0 && this.frames.at(frameIndex).isStrike()) {
        this.frames.at(frameIndex).frameScores.push(this.frames.at(frameIndex+1).getFrameScoresSum());
        frameIndex--;
      }
    }
  }

  totalScore() {
    let sum = 0;
    this.frames.forEach(frame => {
      sum += frame.getFrameScoresSum();
    });
    return sum;
  }

  getRollScore() {
    return 10;
    // const prompt = require('prompt');
    // prompt.start()
    // prompt.get(['input'], function (err, result) {
    //   if (err) {
    //     return err;
    //   }
    //   return result.input;
    // });
  }

  playFrame(round) {
    let rolls = 2;
    if (round === 10) {
      rolls = 3;
    }
    const currentFrame = new Frame();
    for (let i = 0; i<rolls; i++) {
      currentFrame.addRollScore(this.getRollScore());
      if (currentFrame.isStrike() && round != 10) {
        break;
      } else if (round === 10 && i === 3 && (!currentFrame.isStrike() || !currentFrame.isSpare()) ) {
        break;
      }
    }
    return currentFrame;
  }
}


module.exports = BowlingGame;

let bowlingGame = new BowlingGame;
bowlingGame.play();
console.log(bowlingGame.totalScore());
const Frame = require('./frame');

class Game {

  constructor() {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
    this.framecount = 0;
  }

  roll(pins) {
    let currentFrame = this.frames[this.framecount];
    if (this.framecount < 9) {
      currentFrame.addRoll(pins);
      if (currentFrame.frameComplete(this.framecount)) {
        this.framecount += 1;
      }
    } else {
      if (!currentFrame.frameComplete(this.framecount)){
        currentFrame.addRoll(pins);
      }
    }
  }

  totalScore () {
    let totalscore = 0;
    this.frames.forEach((frame, index) => {
      if (index < 9) {
        if (frame.checkStrike()) {
          totalscore += frame.score() + this.frames[index + 1].rolls[0] + this.frames[index + 1].rolls[1];
        } else if (frame.checkSpare()) {
          totalscore += frame.score() + this.frames[index + 1].rolls[0];
        } else {
          totalscore += frame.score();
        }
      } else {
        totalscore += frame.score();
        }
      
    });
    return totalscore;
  }
}  

module.exports = Game;
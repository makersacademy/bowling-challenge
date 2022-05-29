const Frame = require('./frame');
const SpecialFrame = require('./specialFrame');

class ScoreCard {
  constructor() {
    this.score = 0;
    this.frames = [new Frame];
    this.currentFrame = 1;
  }

  includingRollResult(pinsKnocked) {
    if (this.currentFrame <= 10) {
      this.frames[this.currentFrame - 1].countRoll(pinsKnocked);
      this.calculateBonus(pinsKnocked);
      this.checkFrameComplete();
    }
  }

  calculateBonus(pinsKnocked) {
    if (this.currentFrame > 1) {
      for(let i = 0; i < this.currentFrame - 1; i ++) {
        if (i != 9){
          this.frames[i].addBonusScore(pinsKnocked);
        }
      }
    }
  }

  checkFrameComplete() {
    if (this.frames[this.currentFrame - 1].complete == true) {
      this.score = 0;
      for(let i = 0; i < this.currentFrame; i ++) {
        this.frames[i].calculateScore();
        this.score += this.frames[i].score;
      }
      this.showScore();
      this.currentFrame += 1;
      if (this.currentFrame === 10) {
        this.frames.push(new SpecialFrame);
      } else {
        this.frames.push(new Frame);
      }
    }
  }

  showScore() {
    console.log(`Frame: ${this.currentFrame}, Score: ${this.score}`);
  }
}

module.exports = ScoreCard;
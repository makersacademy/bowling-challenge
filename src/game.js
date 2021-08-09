class Game {
  constructor() {
    this.currentFrameObj = null;
    this.currentFrameNum = 1;
    this.scoresArray = [];
    this.framesArray = [];
    this.finished = false;
  }

  startGame() {
    this.currentFrameObj = new Frame(this.currentFrameNum);
  }

  firstRoll(pins) {
    this.currentFrameObj.firstRoll(parseInt(pins));
  }

  secondRoll(pins) {
    this.currentFrameObj.secondRoll(parseInt(pins));
  }

  endFrame() {
    this.storeFrame();
    this.checkIfEnd();
    this.nextFrame();
  }

  storeFrame() {
    if (this.currentFrameNum < 11) {
      this.framesArray.push(this.currentFrameObj);
      this.calculateScore();
    } else {
      this.calculateBonusScore();
    }
  }

  checkIfEnd() {
    if (this.currentFrameObj.checkEnd() === 'End') {
      console.log('we are ending on 10th round');
      this.endGame();
    }
  }

  nextFrame() {
    this.currentFrameNum += 1;
    this.currentFrameObj = new Frame(this.currentFrameNum);
  }

  endGame() {
    this.finished = true;
  }

  calculateScore() {
    this.scoresArray.push(this.currentFrameObj.frameScore);
    if (this.currentFrameNum > 1) {
      if (this.framesArray[this.currentFrameNum - 2].isStrike === true) {
        this.scoresArray[this.currentFrameNum - 2] += (10 + this.currentFrameObj.frameScore);
      } else if (this.framesArray[this.currentFrameNum - 2].isSpare === true) {
        this.scoresArray[this.currentFrameNum - 2]
        += (10 + this.currentFrameObj.currentFrameObj.score.firstRoll);
      }
    }
  }

  calculateBonusScore() {
    if (this.framesArray[9].isStrike === true) {
      this.bonusStrike();
    } else if (this.framesArray[9].isSpare === true) {
      this.bonusSpare();
    }
  }

  bonusStrike() {
    this.scoresArray[9] = (10 + this.currentFrameObj.frameScore);
    this.finished = true;
  }

  bonusSpare() {
    this.scoresArray[9] = (10 + this.currentFrameObj.score.firstRollPins);
    this.finished = true;
  }

  totalScore() {
    let sum = 0;
    for (let i = 0; i < this.scoresArray.length; i++) {
      sum += this.scoresArray[i];
    }
    return sum;
  }
}

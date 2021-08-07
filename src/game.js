class Game {
  constructor() {
    this.currentFrameObj = null;
    this.currentFrameNum = 1;
    this.scoresArray = [];
    this.framesArray = [];
    this.finished = false;
  }

  startGame() {
    this.currentFrameObj = new Frame(1);
  }

  firstRoll(pins) {
    this.currentFrameObj.firstRoll(pins);
  }

  secondRoll(pins) {
    this.currentFrameObj.secondRoll(pins);
  }

  endFrame() {
    this.storeFrame();
    this.checkIfEnd();
    this.nextFrame();
  }

  storeFrame() {
    this.framesArray.push(this.currentFrameObj);
    this.calculateScore();
  }

  checkIfEnd() {
    if (this.currentFrameObj.checkEnd() === 'End') {
      this.endGame();
    } else if (this.currentFrameObj.checkEnd() === 'Bonus') {
      this.bonusFrame();
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
}

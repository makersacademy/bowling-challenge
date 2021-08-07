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
    this.scoresArray.push(this.currentFrameObj.frameScore);
  }

  checkIfEnd() {
    if (this.currentFrameObj.checkEnd() === 'End') {
      endGame();
    } else if (this.currentFrameObj.checkEnd() === 'Bonus') {
      bonusFrame();
    }
  }

  nextFrame() {
    this.currentFrameNum += 1
    this.currentFrameObj = new Frame(this.currentFrameNum);
  }
}

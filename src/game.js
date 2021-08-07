class Game {
  constructor() {
    this.currentFrameObj = null;
    this.currentFrameNum = 1;
    this.scoresArray = [];
    this.framesArray = [];
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
}
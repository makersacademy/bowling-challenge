class Game {
  constructor() {
    this.frames = [
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
    ];
    this.currentFrameIndex = 0;
  }

  takeTurn = (pinsKnocked) => {
    this.frames[this.currentFrameIndex].roll(pinsKnocked);
    if (this.frames[this.currentFrameIndex].rolls.length == 2) this.nextTurn();
  };

  nextTurn = () => {
    this.currentFrameIndex++;
  };
}

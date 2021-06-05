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
    this.currentFrame().roll(pinsKnocked);
    if (this.currentFrame().rolls.length == 2) this.nextTurn();
    if (this.currentFrame().isStrike()) this.nextTurn();
  };

  nextTurn = () => {
    this.currentFrameIndex++;
  };

  currentFrame = () => {
    return this.frames[this.currentFrameIndex];
  };
}

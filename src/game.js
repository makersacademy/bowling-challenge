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

  getCurrentScore = () => {
    let total = 0;
    this.frames.forEach((frame) => {
      total += frame.total;
    });
    return total;
  };

  updateScores = () => {
    this.frames.forEach((frame, index) => {
      if (frame.isStrike()) this.getBonus(2, index);
      if (frame.isSpare()) this.getBonus(1, index);
    });
  };

  getBonus = (bonusRolls, index) => {
    let bonus = this.frames
      .slice(index + 1, index + bonusRolls + 1)
      .map((frame) => frame.rolls)
      .flat()
      .slice(0, bonusRolls)
      .reduce((a, b) => a + b, 0);
    this.frames[index].addBonus(bonus);
  };
}

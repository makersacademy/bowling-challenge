class Frame {
  constructor() {
    this.rolls = [];
    this.regularPoints = 0;
    this.bonusPoints = 0;
  }

  roll(points) {
    if (this.rolls.length === 2 || this.rolls[0] === 10) {
      throw new Error('Tried to add points to a frame that is already over');
    } else if ((this.regularPoints + points) > 10) {
      throw new Error(`Tried to add roll that would exceed max score in a frame (${this.regularPoints} + ${points})`);
    } else {
      this.rolls.push(points);
      this.regularPoints += points;
    }
  }

  // is this function necessary? This logic could be in Game
  play(pointsArray) {
    pointsArray.forEach((points) => {
      this.roll(points);
    });
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    return this.regularPoints === 10 && this.rolls.length === 2;
  }
}
module.exports = Frame;

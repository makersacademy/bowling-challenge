class Frame {
  constructor() {
    this.rolls = [];
    this.regularPoints = 0;
    this.bonusPoints = 0;
  };

  roll(points) {
    // check if frame has already ended
    if (this.rolls.length == 2 || this.rolls.includes(10)) {
      throw new Error('Tried to add points to a frame that is already over');
      // check for invalid scores being inputted
    } else if(points < 0 || points > 10 ) {
      throw new Error(`Tried to add an invalid roll score (${points})`);
    } else if ((this.regularPoints + points) > 10) {
      throw new Error(`Tried to add roll that would exceed max score in a frame (${this.regularPoints} + ${points})`);
    } else {
      this.rolls.push(points);
      this.regularPoints += points;
    };
  };
  // is this function necessary? This logic could be in Game
  playFrame(points_array) {
    points_array.forEach((points) => {
      this.roll(points);
    });
  }

  isStrike() {
    return (this.rolls.includes(10) && this.rolls.length == 1 ? true : false);
  }

  isSpare() {
    return (this.regularPoints == 10 && this.rolls.length == 2 ? true : false);
  }
}
module.exports = Frame;

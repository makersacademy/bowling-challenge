class Frame {

  constructor() {
    this.roll_one = 0;
    this.roll_two = 0;
  }

  firstRoll(roll) {
    this._guardClauses(roll);
    this.roll_one = roll
  }

  secondRoll(roll) {
    this._guardClauses(roll);
    this.roll_two = roll
  }

  _guardClauses(roll) {
    if (!Number.isInteger(roll)) {
      throw Error('Please enter a number');
    } else if (roll > 10 || roll < 0) {
      throw Error('Please enter a number between 0 - 10');
    } 
  }

}


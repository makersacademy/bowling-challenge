class Frame {

  constructor() {
    this.roll_one = 0;
    this.roll_two = 0;
  }

  first_roll(roll) {
    this._guard_clauses(roll);
    this.roll_one = roll
  }

  second_roll(roll) {
    this._guard_clauses(roll);
    this.roll_two = roll
  }

  _guard_clauses(roll) {
    if (!Number.isInteger(roll)) {
      throw Error('Please enter a number');
    } else if (roll > 10 || roll < 0) {
      throw Error('Please enter a number between 0 - 10');
    } 
  }

}


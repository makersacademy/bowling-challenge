class Frame {
  constructor(turn = 1) {
    this.turn = turn;
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
    this.complete = false;
    this.score = 0;
  }

  roll(pins) {
    if (this.complete) throw 'This frame is complete';
    if (pins > 10) throw 'You cannot roll more than 10';
    if (pins < 0) throw 'You cannot roll less than 0';

    if (this.roll1 === null) {
      this.firstRoll(pins);
    } else if (this.turn < 10 && this.roll2 === null) {
      this.secondRoll(pins);
    } else if (this.roll2 === null) {
      this.secondRollTurn10(pins);
    } else {
      this.bonus_roll(pins);
    }
  }

  spare() {
    return this.roll1 !== 10 && this.roll1 + this.roll2 === 10;
  }

  strike() {
    return this.roll1 === 10;
  }

  firstRoll(pins) {
    this.roll1 = pins;
    if (pins === 10 && this.turn < 10) {
      this.complete = true;
    }
    this.calculate_total();
  }

  secondRoll(pins) {
    this.roll2 = pins;
    this.complete = true;
    this.calculate_total();
  }

  secondRollTurn10(pins) {
    this.roll2 = pins;
    if (this.roll1 + this.roll2 < 10) {
      this.complete = true;
    }
    this.calculate_total();
  }

  bonus_roll(pins) {
    this.roll3 = pins;
    this.complete = 'complete';
    this.calculate_total();
  }

  calculate_total() {
    if (this.roll1 !== null) this.score = this.roll1;
    if (this.roll2 !== null) this.score += this.roll2;
    if (this.roll3 !== null) this.score += this.roll3;
    return this.score;
  }
}

module.exports = Frame;

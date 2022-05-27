class Frame {
  constructor() {
    this.rolls = [];
    this.spare = false;
    this.strike = false;
  }

  roll(numberOfPins) {
    this.rolls.push(numberOfPins);
  }

  frameTotal() {}
}

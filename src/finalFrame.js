class finalFrame {
  constructor() {
    this.finalFirstPins = null;
    this.finalSecondPins = null;
  }

  firstRoll(pins) {
    this.finalFirstPins = pins;
  }

  secondRoll(pins) {
    this.finalSecondPins = pins;
  }

  spareScore() {
    return (10 + this.finalFirstPins);
  }

  strikeScore() {
    return (10 + this.finalFirstPins + this.finalSecondPins);
  }
}
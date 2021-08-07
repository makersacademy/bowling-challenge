class Frame {
  constructor(round) {
    this.score = new Score();
    this.round = round;
  }

  firstRoll(pins) {
    this.score.firstRoll(pins);
  }

  secondRoll(pins) {
    this.score.secondRoll(pins);
  }
}

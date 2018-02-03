class Frame {
  constructor() {
    this.rounds = [];
  }

  score() {
    return this.rounds.reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < 2) {
      return this.rounds.push(value);
    }
    if (this.rounds.length < 3 && this.score() === 10) {
      return this.rounds.push(value);
    }
    if (this.rounds.length < 3 && this.rounds[0] === 10) {
      return this.rounds.push(value);
    }
    return false;
  }

  isFinished() {
    if (this.rounds[0] === 10) { return true; }
    if (this.rounds.length === 2) { return true; }
    return false;
  }
}

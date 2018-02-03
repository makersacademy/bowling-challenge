const strike = 10;
const rounds = 2;

class Frame {

  constructor() {
    this.rounds = [];
  }

  score() {
    if (this.useThird()) { return this.rounds.reduce((a, b) => a + b, 0); }
    return this.rounds.slice(0,rounds).reduce((a, b) => a + b, 0)
  }

  roll(value) {
    if (this.rounds.length < 3) { this.rounds.push(value); }
  }

  isFinished() {
    if (this.rounds[0] === strike) { return true; }
    if (this.rounds.length === rounds) { return true; }
    return false;
  }
  useThird() {
    const first = this.rounds[0];
    if (first === strike) { return true; }
    if (first + this.rounds[1] === strike) { return true; }
    return false;
  }
}

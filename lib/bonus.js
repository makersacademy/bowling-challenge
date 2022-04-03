class Bonus {
  constructor(frame, bonus) {
    this.frame = frame;
    this.bonus = bonus;
  }

  apply(score) {
    this.frame.addScore(score);
    this.bonus -= 1;
  }

  isActive() {
    return this.bonus > 0;
  }
}

module.exports = Bonus;

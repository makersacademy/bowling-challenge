class Bowling {
  constructor(currentScore = 0) {
    this.currentScore = currentScore
    this.frames = []
    this.strikes = 0
    this.spares = 0
  };

  rolls(roll1, roll2) {
    if (roll1 == 10) {
      this.strike()
    } else if (roll1 + roll2 == 10) {
      this.spare()
    } else if (this.spares == 0 && this.strikes == 0) {
      this.currentScore += (roll1 + roll2)
    } else if (this.strikes !== 0) {
      this.addStrike(roll1, roll2)
    } else if (this.spares !== 0) {
      this.addSpare(roll1, roll2)
    };
    this.frames.push([roll1, roll2])
  };

  strike() {
    this.strikes += 1
  };

  spare() {
    this.spares += 1
  }

  addStrike(roll1, roll2) {
    this.currentScore += (10 + (2 * (roll1 + roll2)))
    this.strikes = 0;
  }

  addSpare(roll1, roll2) {
    this.currentScore += (10 + roll2 + (2 * roll1))
    this.spares = 0;
  };
};

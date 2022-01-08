class Frame {
  constructor() {
    this.score = 0;
  }

  getRollScore() {
    return prompt();
  }

  playFrame() {
    let rollcount = 1;

    while (rollcount < 3) {
      //kanei pragmata
      let rollScore = this.getRollScore();
      this.addRollScore(rollScore);
      if (this.score === 10 && rollcount === 1) {
        return;
      } else {
        rollcount += 1;
      }
    }
  }

  addRollScore(rollscore) {
    this.score += rollscore;
  }
}

module.exports = Frame;

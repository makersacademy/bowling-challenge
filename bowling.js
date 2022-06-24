class Bowling {
  constructor() {
    this.score = 0;
    this.currentRound = 0;
    this.keepPlaying = true;
  }

  getScore() {
    return this.score;
  }

  playRound(frame) {
    frame.forEach(score => {
      this.score += score;
    });
    if (this.keepPlaying) {
      this.currentRound++;
    } else {
      this.keepPlaying = false;
      return "You've reached the end of the game";
    }
    this.shouldContinue();
  }

  shouldContinue() {
    if (this.currentRound === 10) {
      this.keepPlaying = false;
    } else {
      this.keepPlaying = true;
    }
  }

  getRound() {
    return this.currentRound;
  }
}

module.exports = Bowling;
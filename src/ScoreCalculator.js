class ScoreCalculator {

  constructor() {
    this.frames = []
    this.frame = 1
    this.round = 1
    this.STRIKE_SCORE = 10
  }

  add(score) {
    console.log(this.round)
    if (this.gameOver()) {
      return null
    } else if (this.frame == 1) {
      if (score == 10) { // strike
        this.frames.push(this.STRIKE_SCORE);
        this.frames.push(null);
        this.frame == 1
        this.round += 1
      } else {
        this.frames.push(score);
        this.advFrame();
      }
    } else if (this.frame == 2) {
      this.isSpare(score);
      this.frames.push(score);
      this.resetFrame();
    }
  };

  addedScores() {
    let total = 0
    this.frames.forEach((score, index) => {
      if (this.isStrike(score)) {
        total += 10 + this.strikeBonus(index)
      } else if (this.isSpare(score, index)) {
        total += 10
      } else {
        total += score
      }
    })
    return total
  }

  isStrike(score) {
    if (score == 10) {
      return true
    }
  }

  strikeBonus(index) {
    return this.frames[index + 2] + 10
  }

  resetFrame() {
    this.frame = 1
    this.round += 1
  }

  advFrame() {
    this.frame += 1
  }

  gameOver() { // refactor into isSpare() for this spaghetti code
    if (this.round == 11 && this.frames[this.frames.length - 1] == 10) {
      return false
    } else if (this.round == 11 && this.frames[this.frames.length - 1] + this.frames[this.frames.length - 2] == 10) {
      return false
    } else if (this.round < 12) {
      return false
    } else {
      return true
    }
  }

  isSpare(score, index) {
    if (score + this.frames[index + 1] == 10) {
      return true
    }
  }

}


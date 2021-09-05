class Game {
  constructor(scoreCard) {
    this.currentFrame = 1;
    this.pinsRemaining = 10;
    this.scoreCard = scoreCard;
    this.turn = "first";
  }

  roll(pinsDown) {
    if (this.turn == "first") {
      if (pinsDown < 10) {
        this.pinsRemaining = 10 - pinsDown;
        this.turn = "second";
      } else {
        this.pinsRemaining = 10;
        this.currentFrame ++;
      }

      new Frame(this.scoreCard);
    } else {
      this.turn = "first";
      this.pinsRemaining = 10;
      this.currentFrame ++;
    }

    this.scoreCard.lastFrame().addRoll(pinsDown);
  }

  score() {
    let total = 0;

    this.scoreCard.regularFrames().forEach((frame) => {
      total += frame.baseScore();
      if (frame.isSpare()) total += this._spareBonus(frame);
      if (frame.isStrike()) total += this._strikeBonus(frame);
    })

    return total;
  }

  _spareBonus(frame) {
    return frame.after() ? frame.after().firstRoll : 0
  }

  _strikeBonus(frame) {
    let bonus = 0;
    if (frame.after()) {
      if (frame.after()) bonus += frame.after().baseScore();
    }

    if (frame.afterNext()) {
      if (frame.after().isStrike()) {
        bonus += frame.afterNext().firstRoll;
      }
    }

    return bonus;
  }
}

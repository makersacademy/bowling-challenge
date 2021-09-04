class Game {
  constructor(scoreCard) {
    this.scoreCard = scoreCard;
    this.turn = "first";
  }

  roll(pinsDown) {
    if (this.turn == "first") {
      if (pinsDown < 10) this.turn = "second";
      new Frame(this.scoreCard);
    } else {
      this.turn = "first";
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
    if (frame.after()) return frame.after().firstRoll;
  }

  _strikeBonus(frame) {
    let bonus = 0;
    if (frame.after()) bonus += frame.after().baseScore();
    if (frame.after().isStrike() && frame.afterNext()) {
      bonus += frame.afterNext().firstRoll;
    }

    return bonus;
  }
}

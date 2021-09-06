class Game {
  constructor(scoreCard) {
    this.currentFrame = 0;
    this.pinsRemaining;
    this.scoreCard = scoreCard;
    this.turn;

    this._nextFrame()
  }

  over() {
    if (this.currentFrame < 10 || !this.scoreCard.lastFrame().complete()) {
      return false;
    }

    let lastFrame = this.scoreCard.lastFrame()

    let regularGame = (
      lastFrame.number == 10 &&
      lastFrame.complete() &&
      lastFrame.isBoring()
    )

    let finalSpare = (
      lastFrame.number == 11 &&
      lastFrame.complete() &&
      this.scoreCard.getFrameNumber(10).isSpare()
    )

    let finalStrike = (
      lastFrame.number == 12 &&
      lastFrame.complete() &&
      this.scoreCard.getFrameNumber(10).isStrike()
    )

    return (regularGame || finalSpare || finalStrike)
  }

  roll(pinsDown) {
    if (this.turn == "first") {
      if (pinsDown < 10) {
        this.pinsRemaining = 10 - pinsDown;
        this.turn = "second";
      } else {
        this._nextFrame();
      }

      new Frame(this.scoreCard);
    } else {
      this._nextFrame();
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

  _nextFrame() {
    this.pinsRemaining = 10;
    this.currentFrame ++;
    this.turn = "first";
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

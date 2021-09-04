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
    })

    return total;
  }
}

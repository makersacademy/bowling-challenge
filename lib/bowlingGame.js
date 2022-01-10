class BowlingGame {
  constructor() {
    this.frames = [];
    this.frame = [];
    this.spareCounter = [];
    this.strikeCounter = [];
    this.strikeCounter2 = [];
    this.score = [];
  }

  roll(pins) {
    this.frame.push(pins);
    if (this.strikeCounter.length === 2 && this.strikeCounter2.length === 1 && this.frame == 10) {
      this.strikeAndStrikeLogic3(pins)
    } else if (this.strikeCounter.length === 2 && this.strikeCounter2.length === 1) {
      this.strikeAndStrikeLogic2(pins);
    } else if (this.strikeCounter.length === 1 && this.frame == 10) {
      this.strikeAndStrikeLogic1(pins)
    } else if (this.strikeCounter.length === 2) {
      this.strikeLogicPart3(pins);
    } else if (this.strikeCounter.length === 1) {
      this.strikeCounter.push(pins);
    } else if (this.isStrike(pins)) {
      this.strikeLogicPart1();
    } else if (this.spareCounter == 10) {
      this.spareLogicPart2(pins);
    } else if (this.isSpare()) {
      this.spareLogicPart1();
    } else if (this.frame.length === 2) {
      this.normalFrameLogic();
    }
  }

  getScore() {
    let finalScore = 0;
    this.score.map((score) => {
      return (finalScore += score);
    });
    return finalScore;
  }

  normalFrameLogic() {
    this.frames.push(this.frame);
    this.score.push(this.sum(this.frame));
    this.frame = [];
  }

  isSpare() {
    return this.frame.length === 2 && this.sum(this.frame) === 10;
  }

  spareLogicPart1() {
    this.frames.push(this.frame);
    this.spareCounter.push(10);
    this.frame = [];
  }

  spareLogicPart2(pins) {
    this.spareCounter.push(pins);
    this.score.push(this.sum(this.spareCounter));
    this.spareCounter = [];
  }

  isStrike(pins) {
    return this.frame.length === 1 && pins == 10;
  }

  strikeLogicPart1() {
    this.strikeCounter.push(10);
    this.frames.push(this.frame);
    this.frame = [];
  }

  strikeLogicPart3(pins) {
    this.strikeCounter.push(pins);
    this.frames.push(this.frame);
    this.score.push(this.sum(this.strikeCounter));
    this.score.push(this.sum(this.frame));
    this.strikeCounter = [];
    this.frame = [];
  }

  strikeAndStrikeLogic1(pins) {
    this.strikeCounter.push(pins)
    this.strikeCounter2.push(pins)
    this.frames.push(this.frame)
    this.frame = []
  }

  strikeAndStrikeLogic2(pins) {
    this.strikeAndStrikeLogic1(pins)
    this.score.push(this.sum(this.strikeCounter))
    this.strikeCounter = [10, 10]
    this.strikeCounter2 = []
  }

  strikeAndStrikeLogic3(pins) {
    this.strikeAndStrikeLogic1(pins)
    this.score.push(this.sum(this.strikeCounter))
    this.strikeCounter = [10, 10]
    this.strikeCounter2 = [10]
  }

  sum(array) {
    let total = 0;
    array.map((num) => {
      return (total += num);
    });
    return total;
  }
}

module.exports = BowlingGame;

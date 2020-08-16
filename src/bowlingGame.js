class BowlingGame {
  constructor() {
    this._rollScores = [];
    this._frameNumber = 0;
  }

  addRoll(pins) {
    this._rollScores.push(pins);
  }

  scoreGame() {
    let score = 0;
    let index = 0;
    for (let frame = 1; frame <= 10; frame += 1) {
      if (this.isStrike(index)) {
        score += (10 + this.strikeBonusPoints(index));
        index += 1;
        this._frameNumber += 1;
      } else if (this.isSpare(index)) {
        score += (10 + this.spareBonusPoints(index));
        index += 2;
        this._frameNumber += 1;
      } else {
        score += this.addRollsInFrame(index);
        index += 2;
        this._frameNumber += 1;
      }
    }
    return score;
  }

  isStrike(index) {
    return this._rollScores[index] === 10;
  }

  isSpare(index) {
    return (this._rollScores[index] + this._rollScores[index + 1]) === 10;
  }

  strikeBonusPoints(strikeIndex) {
    return this._rollScores[strikeIndex + 1] + this._rollScores[strikeIndex + 2];
  }

  spareBonusPoints(spareIndex) {
    return this._rollScores[spareIndex + 2];
  }

  isGameOver() {
    return this._frameNumber === 10;
  }

  addRollsInFrame(index) {
    return this._rollScores[index] + this._rollScores[index + 1];
  }

  totalScore() {
    return this._totalScore;
  }

  rollScores() {
    return this._rollScores;
  }
}
module.exports = BowlingGame;

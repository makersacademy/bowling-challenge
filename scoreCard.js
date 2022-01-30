class ScoreCard {
  constructor() {
    this.totalPoints = 0;
    this.rolls = [];
  }

  addKnockedPins(pins) {
    if (this.#tooManyPins(pins)) throw "this is a 10 pins bowling game!";
    
    this.rolls.push(pins);
    this.totalPoints += pins;
  }

  getTotalPoints() {
    return this.totalPoints;
  }

  #tooManyPins(pins) {
    return this.rolls.reduce((partialSum, a) => partialSum + a, 0) + pins > 10;
  }
}

module.exports = ScoreCard;

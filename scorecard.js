class Scorecard {
  constructor() {
    this.scores = []
    this.bonus = []
  };

  addFrame(frame) {
    this.scores.push(frame);
  };

  allScores() {
    return this.scores.map(score => score.printFrame())
  }

  calculate() { 
    this.scores.map((score, index) => {
      if (score.isStrike() && index !== 9) {
        this.#addStrikeBonus(0, index);
      } else if (score.isSpare() && index !==9) {
        let nextFrame = this.scores[index+1].printFrame();
        let nextRoll = nextFrame[0];
        this.bonus.push(nextRoll);
      }
    })
    let totalBonuses = this.#total(this.bonus.flat());
    let totalScores = this.#total(this.scores.map(score => score.printFrame()).flat());
    return totalScores + totalBonuses;
  };

  #total(array) {
    let total = 0;
    array.forEach(number => total += number);
    return total;
  };

  #addStrikeBonus(startIndex, endIndex) {
    let scores = this.scores.map(score => score.printFrame());
    let newArray = scores.slice(startIndex, endIndex);
    let newIndex = newArray.flat().length;
    let nextRoll = scores.flat()[newIndex+1];
    let subsequentRoll = scores.flat()[newIndex+2];
    this.bonus.push((nextRoll));
    this.bonus.push((subsequentRoll));
  };

};


module.exports = Scorecard;
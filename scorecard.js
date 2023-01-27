class Scorecard {
  constructor() {
    this.scores = []
    this.bonus = []
  }

  addFrame(frame) {
    this.scores.push(frame)
  }

  calculate() { 
    this.scores.map((score, index) => {
      if (score.isStrike() && index !== 9) {
        this.#addStrikeBonus(0, index)
      } 
    })
    let totalBonuses = this.#total(this.bonus.flat())
    let totalScores = this.#total(this.scores.map(score => score.printFrame()).flat())
    return totalScores + totalBonuses
  }

  #total(array) {
    let total = 0;
    array.forEach(number => total += number);
    return total;
  }

  #addStrikeBonus(startIndex, endIndex) {
    let scores = this.scores.map(score => score.printFrame())
    let newArray = scores.slice(startIndex, endIndex)
    let newIndex = newArray.flat().length
    let bonusOne = scores.flat()[newIndex+1]
    let bonusTwo = scores.flat()[newIndex+2]
    this.bonus.push((bonusOne))
    this.bonus.push((bonusTwo));
  }

}


module.exports = Scorecard;
class Bowling{
  constructor(scorecard){
    this.scorecard = scorecard
    this.totalScore = 0
  }

  sumTotal(){
    this.scorecard.forEach(twoRolls => {
      let subTotal = twoRolls.reduce((num1, num2) => {
        return num1 + num2
      })
      this.totalScore += subTotal
    });
    return this.totalScore
  }
}

module.exports = Bowling;
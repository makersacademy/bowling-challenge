class Scorecard {
  
  constructor() {
    this.currentScore = []
  };

  rollBall(numberOfPins) {
    let total = this.currentScore
    total.push(numberOfPins)
    return total
  };

  addScore(){
    var sum = this.currentScore.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
        return sum
  };
};
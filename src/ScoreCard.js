class Scorecard {
  
  constructor(finishedGame = false) {
    this.currentScores = []
    this.finishedGame = finishedGame
  };

  rollBall(numberOfPins) {
    let total = this.currentScores
    total.push(numberOfPins)
    return numberOfPins
  };

  addScore(){
    var sum = this.currentScores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
        return sum;
  };

  isComplete(){
    if (this.currentScores.length >= 1) {
      return this.finishedGame = true
    } else {
      return this.finishedGame = false
    };

  };

};
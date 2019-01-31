class Scorecard {

  constructor() {
    this.frame = []
    this.frameNumber = 0
    this.rollnumber = 0
  };

  addFrame(roll1, roll2) {
    this.frame.push(roll1, roll2)
    this.frameNumber += 1
    return roll1 + roll2
  }

  score() {
    let result = 0;
    let rollIndex = 0

    for (var indexOfFrame = 0; indexOfFrame < 10; indexOfFrame++) {
      if (this.frame[rollIndex] + this.frame[rollIndex + 1] === 10) {
          result += this.frame[rollIndex] + this.frame[rollIndex + 1] + this.frame[rollIndex + 2]
      } else { 
          result += this.frame[rollIndex] + this.frame[rollIndex + 1]
      }
      rollIndex += 2
    }
    return result
  }
  

  totalScore(){
    let sum = this.frame.reduce((accumVal, currentValue) => {
        return accumVal + currentValue;
      }, 0);
        return sum;
  };



};
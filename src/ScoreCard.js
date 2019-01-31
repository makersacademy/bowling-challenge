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

  totalScore(){
    let sum = this.frame.reduce((accumVal, currentValue) => {
        return accumVal + currentValue;
      }, 0);
        return sum;
  };



};
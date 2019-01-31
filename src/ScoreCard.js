class Scorecard {

  constructor() {
    this.frame = []
  };

  addFrame(roll1, roll2) {
    this.frame.push(roll1, roll2)
    return roll1, roll2
  }

  accumScore(){
    let sum = this.frame.reduce((accumVal, currentValue) => {
        return accumVal + currentValue;
      }, 0);
        return sum;
  };

};
class Scorecard {

  constructor() {
    this.frame = []
    this.frameNumber = 1
    this.rollnumber = null
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

  updateFrame() {
    // if the number of rolls is equal to 2, then add a frame
    if (this.frame.length >= 2 ) {
      return this.frameNumber ++;
    }
    // needs to return or give another frame based on 2 rolls.
  }

  

};
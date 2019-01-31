class Scorecard {

  constructor() {
    this.frame = []
  };

  addFrame(roll1, roll2) {
    this.frame.push(roll1, roll2)
    return roll1, roll2
  }

};
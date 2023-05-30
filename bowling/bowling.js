class Scorecard {
  constructor() {
    this.scorecard = [];
  }

  addFrame(...frames) {
    if (this.scorecard.length < 10) {
      this.scorecard.push([...frames]);
    } else {
      return 'This game has been completed already.';
    }
  }

  calculateScore() {
    let total = 0; 
    let counter = 1; 
    this.scorecard.forEach((frame) => {
      let roll = frame.reduce((a, b) => {
        return a + b;
      });
      if (roll >= 10 && counter < 10  && counter != this.scorecard.length) {
        total += roll ;
        total += this.scorecard[counter][0];
      } else {
        total += roll;
      } 
      counter += 1
    });
    return total;
  }
}

module.exports = Scorecard;
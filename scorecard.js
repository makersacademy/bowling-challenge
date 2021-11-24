const Frame = require("./frame");

class Scorecard {
  constructor(bowls = []) {
    this.bowls = bowls;
  }

  // Slices a bowls array into 2-value arrays, e.g. [1,2,10,3,4] => [[1,2],[10,0],[3,4]]
  sliceBowlsArray = (bowls = this.bowls) => {
    let preslicedBowls = this.addZerosAfterTens(bowls);
    let slicedBowls = [];
    for (let i = 0; i < preslicedBowls.length; i += 2) {
      slicedBowls.push(preslicedBowls.slice(i, i + 2));
    }
    return slicedBowls;
  };

  addZerosAfterTens = (bowls) => {
    let newBowls = bowls;
    for (let i = 0; i < bowls.length; i++) {
      if (newBowls[i] == 10) {
        newBowls.splice(i + 1, 0, 0);
      }
    }
    return newBowls;
  };

  // Display functions to test if functions are working correctly
  showBowls = (bowls = this.bowls) => {
    console.log(bowls);
  };

  myBowls = () => this.bowls;
}

module.exports = Scorecard;

let mySc = new Scorecard([
  1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6,
]);
mySc.showBowls(mySc.sliceBowlsArray());

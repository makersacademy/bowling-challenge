"use strict;"

class BowlingScorecard {

  constructor(){
    this.total = 0
    this.scorecard = []
    this.roll_1 = null
    this.roll_2 = null
    this.frame_count = 1
  };

  getFrame() {
    return `frame: ${this.frame_count}`
  }

  checkRoll(roll) {
    if (this.roll_1 === null && roll === 10) {
      this.roll_1 = roll;
      this.roll_2 = "x";
      this.frame();
    }
    else if (this.roll_1 === null) {
      this.roll_1 = roll;
    }
    else {
      this.roll_2 = roll
      this.frame();
    }
  }

  frame(){
    this.scorecard.push([this.roll_1, this.roll_2])
    console.log(this.scorecard)
    this.roll_1 = null
    this.roll_2 = null
    this.frame_count += 1
  }

  calculateScores() {
    console.log(this.total);
    let index = 0
    while (index < this.scorecard.length) {
      console.log(`frame ${index + 1} index ${index}`);
      console.log(this.scorecard[index][0])
      console.log(this.scorecard[index][1])

      // strike maths
      if (this.scorecard[index][1] === "x" && index < 9){
        console.log("adding strike")
        this.total += this.scorecard[index][0] + this.scorecard[index + 1][0]
        if (this.scorecard[index + 1][1] === "x") {
          console.log("consecutive strike added")
          this.total += this.scorecard[index + 2][0]
        }
        else {
          console.log("non-consecutive strike added")
          this.total += this.scorecard[index + 1][1]
        }
      }
      // final strike
      else if (this.scorecard[index][1] === "x" && index === 9) {
        console.log("final frame")
        this.total += this.scorecard[index][0];
      }
      // spare maths
      else if (this.scorecard[index][0] + this.scorecard[index][1] === 10 && index < 9 ) {
        console.log("adding spare")
        this.total += this.scorecard[index][0] + this.scorecard[index][1];
        this.total += this.scorecard[index + 1][0];
      }
      else {
        this.total += this.scorecard[index][0] + this.scorecard[index][1];
      };
      index += 1;
      console.log(this.total)
    }

    return this.scorecard;
  }


}

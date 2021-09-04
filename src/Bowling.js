"use strict;"

class BowlingScorecard {

  constructor(){
    this.total = 0
    this.scorecard = []
    this.roll_1 = null
    this.roll_2 = null
    this.frame_count = 1
    this.bonus = false
  };

  getFrame() {
    return `frame: ${this.frame_count}`
  }

  getScore() {
    return `score: ${this.total}`
  }

  checkRoll(roll) {
    if (this.roll_1 === null && roll === 10 && this.scorecard.length < 10) {
      console.log("This is a strike!")
      this.roll_1 = roll;
      this.roll_2 = "x";
      console.log("setting bonus")
      this.bonus = true;
      this.frame(this.roll_1, this.roll_2);
    }
    else if (this.roll_1 === null) {
      this.roll_1 = roll;
      if (this.bonus === true && this.scorecard.length > 10) {
        this.roll_2 = 0
        this.frame(this.roll_1, this.roll_2);
      }
    }
    else if (this.roll_1 === null) {
      this.roll_1 = roll;
    }
    else {
      console.log("not a strike")
      this.roll_2 = roll
      if (this.roll_1 + this.roll_2 === 10) {
        this.bonus = true;
      }
      else {
        this.bonus = false;
      };
      this.frame(this.roll_1, this.roll_2);
    }
  }

  frame(roll_1, roll_2){
    this.scorecard.push([roll_1, roll_2])
    console.log(this.scorecard)
    console.log(this.scorecard.length)
    console.log("bonus")
    console.log(this.bonus)
    this.roll_1 = null
    this.roll_2 = null
    this.frame_count += 1
    if (this.scorecard.length === 10 && this.bonus === false) {
      this.calculateScores();
    }
    else if (this.scorecard.length === 11) {
      this.calculateScores();
    }
    this.bonus === false
  }

  calculateScores() {
    this.total = 0
    console.log("in calculating scores");
    console.log(this.total);
    let index = 0
    while (index < this.scorecard.length) {
      console.log(`frame ${index + 1} index ${index} length ${this.scorecard.length}`);
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
    this.getScore();
    this.reset();

  }

  reset() {
    this.scorecard = []
    this.roll_1 = null
    this.roll_2 = null
    this.frame_count = 1
    this.bonus = false
  }

}

/* eslint-disable no-unused-vars */
"use strict";

class ScoreCard {
  constructor(frame) {
    this.frameSheet = [];
    this.frame = frame;
    this.bonusTracker = 0;
  }

  addRoll(val) {
    this.frame.addRoll(parseInt(val));

    //ADD VALUE TO BONUS TRACKER
    let length = this.frameSheet.length;
    if (this.frameSheet[length - 1] == 10) {
      this.bonusTracker += val;
    }

    //ADD FRAME TO FRAMESHEET
    //ADD BONUS TO n-1 or n-2 FRAME
    if (this.frame.frameComplete() === true) {
      this.frameSheet.push(this.frame.frameRolls);

      //ADD BONUS TO FRAME FUNCTIONALITY
      //if bonus add it to previous frame
      if (this.bonusTracker !== 0) {
        //frame complete and there is a bonus
        let length = this.frameSheet.length - 1;
        if (val !== 10) {
          //if the roll is not a strike, update the previous frame
          this.frameSheet[length - 1][0] += parseInt(this.bonusTracker);
        }
      }

      this.frame.reset();
    }
  }

  frameSheet() {
    return this.frameSheet;
  }

  gameTotal() {
    return this.frameSheet
      .map(frame => frame.reduce((acc, val) => acc + val))
      .reduce((acc, frameTotal) => acc + frameTotal);
  }

  bonusTracker() {
    return this.bonusTracker;
  }
}

// function calculateBonus() {
//   //if bonus add it to previous frame
//   if (this.bonusTracker !== 0) {
//     let length = this.frameSheet.length - 1;
//     this.frameSheet[length - 1][0] += parseInt(this.bonusTracker);
//   }
// }
// var frame = new Frame();
// var scoreCard = new ScoreCard(frame);
// scoreCard.addRoll(10);
// scoreCard.addRoll(5);
// scoreCard.bonusTracker; //5
// console.log("Length: " + length);
// console.log("Frame score: " + this.frameSheet[length - 1]);
// console.log(parseInt(this.frameSheet[length - 1]) === 10);
// console.log(this.frameSheet[length - 1] == 10);

'use strict';

class Card {

  constructor() {
    var frameOne = new Frame();
    var frameTwo = new Frame();
    var frameThree = new Frame();
    var frameFour = new Frame();
    var frameFive = new Frame();
    var frameSix = new Frame();
    var frameSeven = new Frame();
    var frameEight = new Frame();
    var frameNine = new Frame();
    var frameTen = new Frame();

    this.frames = [
      frameOne, 
      frameTwo, 
      frameThree, 
      frameFour, 
      frameFive, 
      frameSix, 
      frameSeven, 
      frameEight, 
      frameNine, 
      frameTen
      ];
    this.frameCount = 0;
    this.rollCount = 1;
      }

    addRollScore(roll){
      this.frames[this.frameCount].addRoll(roll);
      this.rollCount += 1;
      if(this.rollCount === 3){
        this.frameCount += 1;
        this.rollCount = 1;
      }
      // this.adjustRollCount(roll);
    }

    // adjustRollCount(roll){
    //   if (roll === 10) {
    //     this.frameCount += 1;
    //   }
    //   else if (this.rollCount === 2) {
    //     this.frameCount -= 1;
    //   }
    //   else {
    //     this.rollCount += 1;
    //   }
    // }

    // need to expand to a foreach function to get through array
    totalScore(){
      var total = this.frames[0].score();
      return total;
    }

    }
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
      this.frames[0].addRoll(roll);
      console.log("this is after addRoll " + roll)
    }

    totalScore(){
      var total = this.frames[0].score();
      return total;
    }

    }
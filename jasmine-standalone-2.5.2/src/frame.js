'use strict';
function Frame() {
    this.pinsDown1 = 0;
    this.pinsDown2 = 0;
    this.totalPins = 10;
    this.rolled1 = false;
    this.rolled2 = false;
    this.currentFrame = 0;
    this.score = 0;

  };

  // function pinsLeft(totalPins, pinsDown){
  //   this.totalPins = totalPins;
  //   this.pinsDown = pinsDown;
  //
  //     if (totalPins > 0) {
  //       this.totalPins = (this.totalPins - this.pinsDown)
  //     } else {
  //       return "There are no pins left"
  //     }
  // }


  // Frame.prototype.roll1 = function() {
  // return this.pinsDown1 = Math.floor((Math.random() * 10) + 1);
  // pinsLeft();
  // firstRoll();
  // };

  Frame.prototype.roll1 = function() {
  return this.pinsDown1 = Math.floor((Math.random() * 10) + 1);
  };

  Frame.prototype.pinsLeft = function() {
    if (this.totalPins > 0 && this.rolled2 === false) {
        return this.totalPins = (this.totalPins - this.pinsDown1);
      } else if (this.totalPins > 0 && this.rollled2 === true) {
        return this.totalPins = (this.totalPins - this.pinsDown2);
      } else {
        return "There are no bowling pins left"
      }
  };

  Frame.prototype.roll2 = function(totalPins) {
    var totalPins = this.totalPins;
    this.pinsDown2 = Math.floor((Math.random() * totalPins) + 1);
    return this.pinsDown2;
    secondRoll();
  };

  Frame.prototype.firstRoll = function() {
    if (this.rolled1 === false) {
        return this.rolled1 = true;
    } else {
       return this.rolled1 = false;
    }
  };
  Frame.prototype.secondRoll = function() {
    if (this.rolled2 === false) {
        return this.rolled2 = true;
    } else {
       return "You have already rolled"
    }
  };

  Frame.prototype.nextFrame = function() {
    // if (this.rolled2 === true) {
      return this.currentFrame += 1;
    //   } else {
    //     return this.currentFrame;
    // }

  };

Frame.prototype.reset = function() {
    this.pinsDown1 = 0;
    this.pinsDown2 = 0;
    this.totalPins = 10;
    this.rolled1 = false;
    this.rolled2 = false;
  };

  Frame.prototype.totalScore = function() {
    return this.score = (this.score + this.pinsDown1 + this.pinsDown2);
  };
  // function rolling1(){
  //   frame.roll1();
  //   frame.pinsLeft();
  //   frame.firstRoll();
  // }
  // function rolling2(){
  //   frame.roll2();
  //   frame.pinsLeft();
  //   frame.secondRoll();
  // }

// };

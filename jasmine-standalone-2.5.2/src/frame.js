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

  Frame.prototype.roll1 = function() {
    this.pinsDown1 = Math.floor((Math.random() * 10) + 1);
  if (this.pinsDown1 === 10) {
      return "It's a strike";
    } else {
      return this.pinsDown1;
    }
    // var result = this.pinsDown1 = Math.floor((Math.random() * 10) + 1);
    // result === 10 ? "It's a strike" : result;
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
      this.currentFrame === 11 ? alert("Game Over") : this.currentFrame += 1;
  };

Frame.prototype.reset = function() {
    this.pinsDown1 = 0;
    this.pinsDown2 = 0;
    this.totalPins = 10;
    this.rolled1 = false;
    this.rolled2 = false;
  };

  Frame.prototype.addScore = function() {
    return this.score = this.score + this.pinsDown1 + this.pinsDown2;
  };

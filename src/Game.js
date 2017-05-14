"use strict";

function Game() {
  this.pinCount = [];
  this.maxPins = 10;
  this.maxBowls = 20;

  Game.prototype.addToFrame = function(pins) {
    this.pinCount.push(pins);
  };

  Game.prototype.bowl = function(pins){
    if (pins > this.maxPins) {
      throw new TypeError ("You cannot knock over more than 10 pins with one ball");
    }
    else
      this.addToFrame(pins);
  };

  Game.prototype.score = function(){
    return this.pinCount.reduce(function(a,b){
      return a + b;
    }, 0);
  };



}

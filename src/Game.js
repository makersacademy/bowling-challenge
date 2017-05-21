"use strict";

function Game() {
  this.frameCount = [];
  this.pinCount = [];
  this.maxPins = 10;
  this.maxFrames = 10;

  Game.prototype.addToFrame = function(pins) {
    this.frameCount.push(pins);
    if (this.frameCount.length === 2) {
      this.pinCount.push(this.frameCount);
      this.frameCount = [];
    }
  };

  Game.prototype.bowl = function(pins){
    if (pins > this.maxPins) {
      throw new TypeError ("You cannot knock over more than 10 pins with one ball");
    }
    else if
      (this.is_Over());
    else
      this.addToFrame(pins);
  };

  Game.prototype.score = function(){
    this.spare();
    var flattened = [].concat.apply([], this.pinCount);
    return flattened.reduce(function(a,b){
      return a + b;
    }, 0);
  };

  Game.prototype.is_Over = function(){
    if (this.pinCount.length === this.maxframes){
      throw new TypeError ("Game over");
    }
  };

  Game.prototype.spare = function(){
    for (var i = 0; i < this.pinCount.length; i++){
      var result = this.pinCount[i][0] + this.pinCount[i][1];
      if (result === 10) {
        this.pinCount[i].push(this.pinCount[i+1][0]);
      }
    }
  };

}

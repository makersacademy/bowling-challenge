"use strict";

function Game() {
  this.frameCount = [];
  this.pinCount = [];
  this.maxPins = 10;
  this.remainingPins = 10;
  this.maxFrames = 10;

  Game.prototype.bowl = function(pins){
    if (pins > this.maxPins) {
      throw new TypeError ("You cannot knock over more than 10 pins with one ball");
    }
    else if
      (this._isOver());
    else
      this.addToFrame(pins);
  };

  Game.prototype.addToFrame = function(pins) {
    this.frameCount.push(pins);
    this.remainingPins = this.maxPins - pins;
    if (pins === this.maxPins) {
      this.clearFrame();
    }
    else if (this.frameCount.length === 2) {
      this.clearFrame();
    }
  };

  Game.prototype.clearFrame = function(){
    this.pinCount.push(this.frameCount);
    this.frameCount = [];
  };

  Game.prototype.checkScore = function(){
    this._isStrike();
    this._isSpare();
    var flattened = [].concat.apply([], this.pinCount);
    return flattened.reduce(function(a,b){
      return a + b;
    }, 0);
  };

  Game.prototype._isSpare = function(){
    for (var i = 0; i < this.pinCount.length; i++){
      var result = this.pinCount[i][0] + this.pinCount[i][1];
      if (result === this.maxPins) {
        this.pinCount[i].push(this.pinCount[i+1][0]);
      }
    }
  };

  Game.prototype._isStrike = function(){
    for (var a = 0; a < this.pinCount.length; a++){
      if (this.pinCount[a][0] === 10) {
        this.pinCount[a].push(this.pinCount[a+1][0]);
        this.pinCount[a].push(this.pinCount[a+1][1]);
      }
    }
  };

  Game.prototype._isOver = function(){
    if (this.pinCount.length === this.maxFrames){
      throw new TypeError ("Game over");
    }
  };
}

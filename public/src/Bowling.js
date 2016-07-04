function Bowling() {
  'use strict';
  this._score = 0;
  this._currentBall = 0;
  this._frames = [];
}

Bowling.prototype = {

  getBallNumber: function() {
    return this._frames.length;
  },

// check interface.js line 65
  testGetScore: function() {
    return this._frames.reduce(function(a, b){return a+b;});
  },

  getScore: function() {
    var frameIndex = 0;
    for(var frame = 0; frame < 10; frame++){

      if(this.isStrike(frameIndex)){
        this._score += 10 + this.strikeBonus(frameIndex);
        frameIndex ++;
      } else if(this.isSpare(frameIndex)){
        this._score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2
      } else {
        this._score += this.sumFrame(frameIndex);
        frameIndex += 2;
      }
    }
    // check bowlingSpec.js line 8
    // return isNaN(this._score) ? 0 : this._score;
    return this._score;
  },

  pinsInCurrentBall: function(pins) {
    this._frames[this._currentBall++] = pins;
  },

  isStrike: function(frameIndex){
    return this._frames[frameIndex] === 10;
  },

  isSpare: function(frameIndex){
    return this._frames[frameIndex] + this._frames[frameIndex + 1] === 10;
  },

  strikeBonus: function(frameIndex){
    return this._frames[frameIndex + 1] + this._frames[frameIndex + 2];
  },

  spareBonus: function(frameIndex){
    return this._frames[frameIndex + 2];
  },

  sumFrame: function(frameIndex){
    return this._frames[frameIndex] + this._frames[frameIndex + 1];
  }
}

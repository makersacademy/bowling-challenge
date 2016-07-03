function Bowling() {
  'use strict';
  this._score = 0;
  this._currentBall = 0;
  this._frames = [];
}

Bowling.prototype = {

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

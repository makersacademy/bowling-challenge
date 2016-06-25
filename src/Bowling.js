function Bowling() {
  'use strict';
  this._score = 0;
  this._currentTurnIndex = 0;
  this._game = [];
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
        this._score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }

    }
    return this._score;
  },

  isStrike: function(frameIndex){
    return this._game[frameIndex] === 10;
  },

  isSpare: function(frameIndex){
    return this._game[frameIndex] + this._game[frameIndex + 1] === 10;
  },

  strikeBonus: function(frameIndex){
    return this._game[frameIndex + 1] + this._game[frameIndex + 2];
  },

  spareBonus: function(frameIndex){
    return this._game[frameIndex + 2];
  },

  sumOfBallsInFrame: function(frameIndex){
    return this._game[frameIndex] + this._game[frameIndex + 1];
  },

  turn: function(pins) {
    this._game[this._currentTurnIndex++] = pins;
  }
}

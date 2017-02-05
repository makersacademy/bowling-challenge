'use strict';

function Bowling(){
  this.START_SCORE = 0;
  this._currentScore = this.START_SCORE;
  this._currentFrame = 0; //index
  this._currentRoll = 0;  //index
  this.scoreSheet = [['a','b'],['c','d'],['e','f'],['g','h'],['i','j'],['k','l'],['m','n'],['o','p'],['q','r'],
  ['s','t','u']]
  this.frameScore = ['ab','cd','ef','gh','ij','kl','mn','op','qr','stu']
};

Bowling.prototype.getScore = function(){
  return this._currentScore;
};

Bowling.prototype.getFrame = function(){
  return this._currentFrame;
};

Bowling.prototype.getRoll = function(){
  return this._currentRoll;
};


Bowling.prototype.addScore = function(scoreToAdd){
  this._currentFrameScore = this._currentFrameScore + scoreToAdd;

};

Bowling.prototype.roll = function(knockedDown){
  this.scoreSheet[this.getFrame()][this.getRoll()] = knockedDown
  if (this.getRoll() == 0) {
    this._currentRoll++
  } else if (this.getRoll() == 1) {
    this._currentRoll--;
    this._currentFrame++;
  };
};

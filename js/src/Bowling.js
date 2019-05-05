'use strict';

function Bowling(){
  this._framerecord = [];
  this._gamerecord = [];
  this._framesores = [];
  this._totalscores = [];
  
};

Bowling.prototype.knock = function(number){
  this._knockedPins = number;
  this.recordFrame();
};

Bowling.prototype.recordFrame = function(){
  var numberofFrameRoll = 2;
  
  if (this._framerecord.length == numberofFrameRoll){
    this._framerecord = [];
  }
  this._framerecord.push(this._knockedPins);
  
  if(this._framerecord.reduce(function(total,current){
    return total + current
  },0) > 10){
    throw new Error("Over 10 knock down in one frame")
  }

  if (this._framerecord.length == numberofFrameRoll){
  this.recordGame();
  }

};

Bowling.prototype.recordGame = function(){
  this._gamerecord.push(this._framerecord);
  this.caculateFrameScore(this._gamerecord.length - 1);
  this.calulateTotalScore(this._gamerecord.length - 1)
};

Bowling.prototype.caculateFrameScore = function(number){
  this._framesores[number] = this._gamerecord[number][0] + this._gamerecord[number][1]
};

Bowling.prototype.calulateTotalScore = function(number){
  var sumscore = 0 
  for(var i = 0; i<=number; i++ ){
    sumscore = sumscore + this._framesores[i]
  }
  this._totalscores.push(sumscore);
};

Bowling.prototype.getKnockedPins = function(){
  return this._knockedPins 
};

Bowling.prototype.getFrameRecord = function(){
  return this._framerecord;
};
Bowling.prototype.getGameRecord = function(){
  return this._gamerecord;
};

Bowling.prototype.getTotalScores = function(framenumber){
  return this._totalscores[framenumber - 1];
}



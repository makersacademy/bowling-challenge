"use strict"

function Game(){
  this._frames = []
  this._lastThreeRoles = []
  this._NUMFRAMES = 10
  this._MAXSCORE = 10;
};


Game.prototype.roll = function(pins){
    this._setFrame();
    this._currentFrame().roll(pins);
    this.spareBonus(pins);
    this.strikeBonus(pins);
};

Game.prototype.frameNumber= function(){
  return this._frames.length;
};

Game.prototype.score =  function(){
  let score = 0;
  this._frames.forEach(function(frame){
    score = score + frame.totalScore()
  });
  return score;
};

Game.prototype._currentFrame = function(){
  return this._frames[this._frames.length - 1];
};

Game.prototype._addFrame = function(frame = new Frame()){
  this._frames.push(frame)
};

Game.prototype._addFinalFrame = function(frame = new FinalFrame()){
  this._frames.push(frame)
};

Game.prototype._setFrame = function(){
  if(this._frames.length === 0){
    this._addFrame();
  } 
  else if (this._frames.length === (this._NUMFRAMES - 1) & !this._currentFrame().isInPlay()){
    this._addFinalFrame();
  } 
  else if(!this._currentFrame().isInPlay()){
    this._addFrame();
  }
};

Game.prototype._lastFrame = function(){
  return this._frames[this._frames.length - 2];
};

Game.prototype._frameBeforeLast = function(){
  return this._frames[this._frames.length - 3]
};

Game.prototype._sumLastTwo = function(array){
  return array[array.length -1] + array[array.length - 2];
};

Game.prototype.strikeBonus = function(pins){
  if(this._checkStrikeBonus(pins)){
    if(this._lastThreeRoles[1] != this._MAXSCORE) {
      this._lastFrame().addBonus(this._sumLastTwo(this._lastThreeRoles));
    }
    else if(this._lastThreeRoles[1] === this._MAXSCORE & this._frameBeforeLast()._bonus === 0) {
      this._frameBeforeLast().addBonus(this._sumLastTwo(this._lastThreeRoles));
    }
    else if(this._lastThreeRoles[1] === this._MAXSCORE & this._frameBeforeLast()._bonus > 0 & this._lastFrame()._bonus === 0) {
      this._lastFrame().addBonus(this._sumLastTwo(this._lastThreeRoles));
    }
  }
};

Game.prototype.spareBonus = function(pins){
  if(this._checkSpareBonus()){
    this._lastFrame().addBonus(pins);
  }
};

Game.prototype._checkSpareBonus = function(){
  if(this._frames.length > 1){
    if(this._lastFrame().containsASpare() & this._lastFrame()._bonus === 0){
      return true;
    }
  }
};

Game.prototype._checkStrikeBonus = function(pins){
  this._lastThreeRoles.push(pins);
  if(this._lastThreeRoles.length === 3){
    if(this._lastThreeRoles[0] === this._MAXSCORE){
      this._lastThreeRoles.shift();
      return true;
    }
    this._lastThreeRoles.shift();
  }
};

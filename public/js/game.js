'use strict';

function Game(rollDefinition=Roll, frameDefinition=Frame){
  this.frameDefinition = frameDefinition;
  this.rollDefinition = rollDefinition;
  this.rollAry = [];
  this.frameAry = [];
};


Game.createInstance = function(){
  return new Game();
};

Game.prototype.roll = function(){
  console.log(this._newFrame());
  if (this._newFrame()) {
    var newFrame = this.frameDefinition.createInstance(this.rollAry,this._rollPtr());
    this.frameAry.push(newFrame);
  }
  var newRoll = this.rollDefinition.createInstance();
  this.rollAry.push(newRoll);

};


Game.prototype._newFrame = function(){
  // var numRolls = this.rollAry.length;
  console.log(this.rollAry.length);

  return this.rollAry.length == 0;
  // || this.RollAry[numRolls - 1].isStrike() ||
  // numRolls == this.frameAry[numFrames - 1].rollPointer() + 2
};

Game.prototype._rollPtr = function(){
  return this.rollAry.length;
};

Game.prototype.rolls = function(){
 return this.rollAry;
};

Game.prototype.frames = function(){
 return this.frameAry;
};

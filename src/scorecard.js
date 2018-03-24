'use strict';

function Scorecard() {
  this._score = [0];
  this._frameScore = 0;
  this._frameCount = 1;
  this._rollsThisFrame = 0;
}

Scorecard.prototype.score = function(){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return this._score.reduce(reducer)
}

Scorecard.prototype.add = function(frame_score){
  this._score.push(frame_score)
}


Scorecard.prototype.roll = function(pinsKnockedDown){
  if (this._rollsThisFrame == 0) {
    this._frameScore += pinsKnockedDown
    this._rollsThisFrame += 1
  }
  else if (this._rollsThisFrame == 1){
    this._frameScore += pinsKnockedDown
    this.resetPins()
  }
}
Scorecard.prototype.resetPins = function(){
  this.add(this._frameScore)
  this._frameCount += 1
  this._frameScore = 0
  this._rollsThisFrame = 0
}

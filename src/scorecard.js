'use strict';

function Scorecard() {
  this._score = [0];
}

Scorecard.prototype.score = function(){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return this._score.reduce(reducer)
}

Scorecard.prototype.add = function(frame_score){
  this._score.push(frame_score)
}

Scorecard.prototype.frame = function(roll){
  this._frame = 0
}

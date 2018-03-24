'use strict';

function Scorecard() {
  this._score = 0;
}

Scorecard.prototype.score = function(){
  return this._score
}

Scorecard.prototype.add = function(number){
  this._score += number
}

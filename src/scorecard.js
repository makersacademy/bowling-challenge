'use strict';

function Scorecard(rolls) {
  this._rolls = rolls

}

Scorecard.prototype._sum = function(numbers) {
    return numbers.reduce( function (a,b) { return a + b })
  }

Scorecard.prototype._isSpare = function(rolls) {
    return 10 === this._sum(this._rolls.slice(0, 2))
  }

Scorecard.prototype._isStrike = function(rolls){
    return 10 === this._rolls[0]
  }

Scorecard.prototype.calcScore = function(rolls, frame) {
    if(frame === 10){
      return this._sum(rolls)}
    else if (this._isStrike(rolls)){
      return this._sum(rolls.slice(0, 3)) + this.calcScore(rolls.slice(1), frame + 1)}
    else if (this._isSpare(rolls)){
      return this._sum(rolls.slice(0, 3)) + this.calcScore(rolls.slice(2), frame + 1)}
    else{
      return this._sum(rolls.slice(0, 2)) + this.calcScore(rolls.slice(2), frame + 1)}
  }

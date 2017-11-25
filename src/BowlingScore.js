
function BowlingScore(){
  this._pinsLeft = 10;

}

BowlingScore.prototype.roll = function(pins){
  this._pinsLeft = 10 - pins
}

BowlingScore.prototype.pinsLeft = function(){
  return this._pinsLeft
}

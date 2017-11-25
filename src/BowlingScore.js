
function BowlingScore(){
  this._pinsLeft = 10;
  this._currentFrame = 0

}

BowlingScore.prototype.roll = function(pins){
  this._pinsLeft = 10 - pins;
  this._currentFrame +=1;
}

BowlingScore.prototype.pinsLeft = function(){
  return this._pinsLeft;
}

BowlingScore.prototype.currentFrame = function(){
  return this._currentFrame;
}

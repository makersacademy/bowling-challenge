
function BowlingScore(){
  this._pinsLeft = 10;
  this._currentFrame = 0;
  this._score = 0;

}

BowlingScore.prototype.roll = function(pins){
  this._pinsLeft = 10 - pins;
  this._currentFrame +=1;
  this._score += pins;
}

BowlingScore.prototype.pinsLeft = function(){
  return this._pinsLeft;
}

BowlingScore.prototype.currentFrame = function(){
  return this._currentFrame;
}

BowlingScore.prototype.score= function(){
  return this._score
}

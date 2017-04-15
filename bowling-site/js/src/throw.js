function Throw(pins=10){
  this.pinsLeft = pins;
}


Throw.prototype.throwBall=function(){
  var score = this.score();
  this.updatePins(score);
  return score;
}

Throw.prototype.score=function(){
  randomNumber = Math.random()
  return Math.floor(randomNumber * (this.pinsLeft + 1));

}

Throw.prototype.updatePins = function(amount){
  this.pinsLeft -= amount;
}

Throw.prototype.resetPins = function(){
  this.pinsLeft = 10;
}

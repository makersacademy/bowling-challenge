function Thrower(){
  this.pinsLeft = 10;
}


Thrower.prototype.throw=function(){
  var score = this.score();
  this.updatePins(score);
  return score;
}

Thrower.prototype.score=function(){
  randomNumber = Math.random()
  return Math.floor(randomNumber * (this.pinsLeft + 1));

}

Thrower.prototype.updatePins = function(amount){
  this.pinsLeft -= amount;
}

Thrower.prototype.resetPins = function(){
  this.pinsLeft = 10;
}

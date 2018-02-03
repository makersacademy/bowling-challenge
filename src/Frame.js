const MAX_SCORE = 10;

function Frame (){
  this.firstRoll = 0
  this.secondRoll = 0
}

Frame.prototype.setFirstRoll = function(pins){
  this.firstRoll = pins
}

Frame.prototype.setSecondRoll = function(pins){
  this.secondRoll = pins
}

Frame.prototype.isStrike = function(){
  return this.firstRoll === MAX_SCORE
}

Frame.prototype.isSpare = function(){
  return this.score() === MAX_SCORE && this.secondRoll !== 0
}

Frame.prototype.score = function(){
  return this.firstRoll + this.secondRoll
}

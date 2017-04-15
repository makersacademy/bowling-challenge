function BallThrow(pins=10){
  this.pinsLeft = pins
}

BallThrow.prototype.throwBall=function(){
    randomNumber = Math.random()
    return Math.floor(randomNumber * (this.pinsLeft + 1));
}

BallThrow.prototype.updatePins = function(amount){
  this.pinsLeft = amount
}

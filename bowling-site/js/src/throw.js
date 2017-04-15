function Throw(pins=10){
  this.pinsLeft = pins
}

Throw.prototype.throwBall=function(){
    randomNumber = Math.random()
    return Math.floor(randomNumber * (this.pinsLeft + 1));
}

Throw.prototype.updatePins = function(amount){
  this.pinsLeft = amount
}

function BallThrow(pins=10){
  this.pinsLeft = pins

}

BallThrow.prototype.rollBall=function(){
    randomNumber = Math.random()
    return Math.floor(randomNumber * 11);
}

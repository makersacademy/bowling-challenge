function Frame(){
  this.framePoints = []
}

Game.prototype.calculateFrame = function(framePoints){
  var sum = 0
  if (framePoints[0] == 10){
    return 10
  }else{
    for( var i = 0; i < framePoints.length; i++ ){
      sum += framePoints[i];
    }
    return sum
  }
}

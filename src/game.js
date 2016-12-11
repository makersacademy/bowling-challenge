function Game(){
  this.frames = 10
  this.totalPoints = []
}

Game.prototype.calculateTotalPoints = function(totalPoints){
this.totalPoints.push(totalPoints)
  var sum = 0;
  for( var i = 0; i < totalPoints.length; i++ ){
    sum += totalPoints[i];
  }
  return sum
}

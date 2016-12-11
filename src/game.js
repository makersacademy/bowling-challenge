function Game(){
  this.frames = 10
  this.points = []
}

Game.prototype.calculatePoints = function(points){
  var sum = 0;
  for( var i = 0; i < points.length; i++ ){
    sum += points[i];
  }
  console.log(sum)

  return sum
}

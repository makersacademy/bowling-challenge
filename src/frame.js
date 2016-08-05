var Frame = function(){
  this.currentFrame = []
  this.pins = 10;
}

Frame.prototype.score = function(points){
  this.currentFrame.push(points);
}

Frame.prototype.remainingPins = function(){
  return this.pins - this.currentFrame[0];
}

Frame.prototype.strike = function(points){
  return points === this.pins
}

Frame.prototype.spare = function(points){
  return points === this.pins
}

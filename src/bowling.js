

var Bowling = function(){
  this.frames = []
  this.currentFrame = []
  this.pins = 10;
}

Bowling.prototype.roll = function(){
  if(this.firstRoll()){
  var points = Math.floor(Math.random()*this.pins+1)
  this.firstRollScore(points);
} else {
  var points = Math.floor(Math.random()*this.remainingPins()+1)
  this.secondRollScore(points);
  }
};

Bowling.prototype.firstRollScore = function(points){
  if(this.strike(points)){
    this.currentFrame.push(points, 0);
    this.saveFrame();
  } else {
    this.currentFrame.push(points);
  }
}

Bowling.prototype.secondRollScore = function(points) {
  this.currentFrame.push(points);
  this.saveFrame();
}

Bowling.prototype.remainingPins = function(){
  return this.pins - this.currentFrame[0];
}

Bowling.prototype.strike = function(points){
  return points === this.pins
}

Bowling.prototype.spare = function(points){
  return points === this.pins
}

Bowling.prototype.saveFrame = function(){
  this.frames.push(this.currentFrame)
  this.currentFrame = []
}

Bowling.prototype.firstRoll = function(){
  return this.currentFrame.length === 0
}

// Bowling.prototype.bonusPoints = function(){
//   if(this.frames(this.frameNumber-1))
// }

Bowling.prototype.frameNumber = function(){
  return this.frames.length
}

Bowling.prototype.sumFrame = function(array){
  for (var i = 0; i < array.length; i++) {
      var total =+ array[i];
  }
  return total;
}

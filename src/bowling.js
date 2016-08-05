

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
    this.applyBonusPoints(points);
    this.bonusPoints(this.frames.length);
  } else {
    this.currentFrame.push(points);
    this.applyBonusPoints(points);
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

Bowling.prototype.frameNumber = function(){
  return this.frames.length
}

Bowling.prototype.sumFrame = function(array){
  var total = 0
  for (var i = 0; i < array.length; i++) {
      total = total + array[i];
  }
  return total;
}

Bowling.prototype.bonusPoints = function(location){
  this.bonusLocation = location-1
  console.log(this.bonusLocation);
  this.bonus = 2
}

Bowling.prototype.applyBonusPoints = function(points){
  if(this.bonus > 0){
    this.frames[this.bonusLocation][0] += points
    console.log(this.frames[0][0]);
  }
}

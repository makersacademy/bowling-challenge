

var Bowling = function(){
  this.gameFrames = []
  this.currentFrame = []
  this.pins = 10;
  this.totalScore = 0;
  this.bonusScores = [];
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
    this.updateTotalScore(points)
    this.saveFrame();
    // this.applyBonusPoints(points);
    this.bonusPoints()
  } else {
    this.currentFrame.push(points);
    this.updateTotalScore(points)
    this.applyBonusPoints(points);
  }
}

Bowling.prototype.secondRollScore = function(points) {
  this.currentFrame.push(points);
  this.updateTotalScore(points)
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
  this.gameFrames.push(this.currentFrame)
  this.currentFrame = []
}

Bowling.prototype.firstRoll = function(){
  return this.currentFrame.length === 0
}

Bowling.prototype.frameNumber = function(){
  return this.gameFrames.length
}

Bowling.prototype.sumFrame = function(array){
  var total = 0
  for (var i = 0; i < array.length; i++) {
      total = total + array[i];
  }
  return total;
}

Bowling.prototype.updateTotalScore = function(points){
  this.totalScore += points;
  if (this.bonus > 0) {
    this.applyBonusPoints(points)
  }
};

Bowling.prototype.bonusPoints = function(){
  // this.bonusLocation = location-1
  this.bonus = 2
  this.bonusCount = 1
}

// Bowling.prototype.applyBonusPoints = function(points){
//   console.log((this.bonus > 0))
//   if(this.bonusCount === 1 || this.bonus === 1) {
//     this.totalScore += points
//     this.bonus -= 1
//     this.bounsCount += 1}
//   else if(this.bonus > 0) {
//     this.totalScore += (points*2);
//     this.bonus -= 1;
//     this.bounsCount += 1}
// }
Bowling.prototype.applyBonusPoints = function(points){
  // if(this.bonusScores.length > 0){
    this.totalScore += points
    this.bonusScores.push(points);
    if(this.bonusScores.length > 1) {
      this.totalScore += this.bonusScores[0]
      this.bonusScores = this.bonusScores.slice(1, this.bonusScores.length)
    }
  // }
  // for (var i = 0; i < this.gameFrames.length; i++) {
  //   if(this.gameFrames[-i][i] === 10 || this.gameFrames[-i][i+1] === 10){
  //     this.totalScore += points;
  //   }
  // }
}


  // if(this.bonus > 0){
  //   this.frames[this.bonusLocation][0] += points
  // }

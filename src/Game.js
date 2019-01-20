function Game(){
  this.framesScores = [];
  this.frameRolls = [];
  this.overallScore = 0;
  // this.frameNumber = 1;
};

Game.prototype.addFrameScore = function(framescore) {
  this.framesScores.push(framescore);
};

Game.prototype.calculateOverallScore = function() {
    for(var i in this.framesScores) { this.overallScore += this.framesScores[i]; }
    return this.overallScore;
 };

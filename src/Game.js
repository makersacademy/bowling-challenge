function Game(){
  this.framesScores = [];
  this.overallScore = 0;
};

Game.prototype.addFrameScore = function(framescore) {
  this.framesScores.push(framescore);
};

Game.prototype.calculateOverallScore = function() {
    for(var i in this.framesScores) { this.overallScore += this.framesScores[i]; }
    return this.overallScore;
 };

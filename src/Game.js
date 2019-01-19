function Game(){
  this.framesScores = [];
  this.overallScore = 0;
};

Game.prototype.calculateOverallScore = function() {
    for(var i in this.frameScores) { this.overallScore += this.frameScores[i]; }
    return this.overallScore;
 };

// function to push the frameScores to the Game
// checks if the game is over? - check lenght of the frames array

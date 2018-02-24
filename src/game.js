var Game = function() {
  this.allFrames =[];
  this.currentScore = 0;
};

console.log(this.currentScore);


Game.prototype.calculateScore = function() {
  score2 = 0;
  for( var frame of this.allFrames) {
    this.currentScore += frame;
  }
};

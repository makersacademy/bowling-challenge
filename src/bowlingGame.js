function BowlingGame(playerName){
  this.playerName = playerName;
  this.currentFrame = 1;
  this.frameScores = [];
}

BowlingGame.prototype.recordScore = function(frameScore){
  this.frameScores.push(frameScore);
};

BowlingGame.prototype.nextFrame = function(){
  this.currentFrame += 1;
};
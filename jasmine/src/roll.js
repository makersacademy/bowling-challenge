function Roll(game, frame){
  this.game = game;
  this.frameScore = null;
  this.isStrike = false;
  this.isSpare = false;
  this.scoreSoFar = 0;
};

Roll.prototype.roll = function(score1, score2) {
  if (score1 == 10) { this.isStrike = true; } //strike
  else if (score2 + score1 == 10){ this.isSpare = true; } // spare
  this.addScore(score1, score2, this.isStrike, this.isSpare);
};

Roll.prototype.addScore = function (score1, score2, strikeStatus, spareStatus) {
  this.scoreSoFar += (score1 + score2); // total for frame (before any bonuses added)
  this.frameScore = {'Ball 1: ' : score1, 'Ball 2:' : score2, 'Strike: ' : strikeStatus, 'Spare: ' : spareStatus }; // push values to Frame Score array
  this.game.scores(this.frameScore, this.scoreSoFar); // push to Games Frames array
};

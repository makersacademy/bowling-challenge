function Roll(game, frame){
  this.game = game;
  this.frameScore = [];
  this.isStrike = false;
  this.isSpare = false;
};

Roll.prototype.roll = function(score1, score2) {
  if (score1 == 10) { this.isStrike = true; }
  else if (score2 + score1 == 10){ this.isSpare = true}
  this.addScore(score1, score2, this.isStrike, this.isSpare);
};

Roll.prototype.addScore = function (score1, score2, strikeStatus, spareStatus) {
  this.frameScore.push(score1, score2, strikeStatus, spareStatus);
  this.game.scores(this.frameScore);

  // this.game.frames.push(this.frameScore);
  // return this.game.frames;
};

var Game = function(){
    this.totalScore = 0;
    this.frame = 1;
};

Game.prototype.getTotalScore = function () {
  return this.totalScore;
};

Game.prototype.updateTotalScore = function (frameScore) {
  this.totalScore += frameScore
  ++ this.frame;
};

Game.prototype.frameNumber = function(){
  if(this.frame > 10){
    return "Game over!"
  } else {
  return this.frame;
 }
};

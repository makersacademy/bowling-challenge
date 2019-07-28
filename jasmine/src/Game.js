function Game() {
  this.score = 0;
};

Game.prototype.addFrame = function(){
  this.score += frame.frameScore;
}

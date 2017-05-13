function Bowling(game = new GameCard()) {
  this.game = game
  this.currentFrame = 1
  this.currentBall = 1
}

Bowling.prototype.bowl = function(score) {
  var frameKey = 'frame' + this.currentFrame;
  this.game[frameKey].push(score);
  this.evaluateBall(score);
}

Bowling.prototype.evaluateBall = function(score) {
  if (this.isInTenthFrame()) {
    this.tenthFrameLogic(score);
  }else if (this.isStrike(score)) {
    this.currentFrame++;
  }else{
    this.nextBall();
  }
}

Bowling.prototype.nextBall = function() {
  if (this.currentBall === 2  && !this.isInTenthFrame()) {
    this.currentBall = 1;
    this.currentFrame++;
  }else{
    this.currentBall++;
  }
}

Bowling.prototype.isStrike = function(score) {
  return score === 10;
}

Bowling.prototype.isInTenthFrame = function() {
  return this.currentFrame === 10;
}

Bowling.prototype.tenthFrameLogic = function(score) {
  if (this.currentBall === 2 && this.game.frame10.reduce(add, 0) < 10){
    this.endGame();
  }else{
    this.nextBall();
  }
};

Bowling.prototype.endGame = function(){

}

function Game () {
  this.totalScore = 0;
  this.frame = 1;
  this.scorecard = {};
  this.log = [];
};

Game.prototype.nextFrame = function() {
  this.frame ++;
};

Game.prototype.addPoints = function(points) {
  this.scorecard[this.frame] = points
  this.totalScore += points;
  this.nextFrame();
};

Game.prototype.addStrikeBonus = function() {
  if (this.log[-2].strike === true) {
    return this.log[-2].score += this.log[-1].score;
  }
}

Game.prototype.saveFrame = function() {
  this.log.push(frame);
}

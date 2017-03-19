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

Game.prototype.sumPoints = function() {
  total = 0
  this.log.forEach(function(frame) {
    total += frame.totalScore
  })
  this.totalScore = total
}

Game.prototype.addStrikeBonus = function() {
  var lastIndex = (this.log.length - 2)
  if (this.log[lastIndex].strike === true) {
    return this.log[lastIndex].totalScore += this.log[lastIndex + 1].totalScore;
  }
}



Game.prototype.saveFrame = function(frame) {
  this.log.push(frame);
}

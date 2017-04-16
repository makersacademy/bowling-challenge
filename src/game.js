function Game() {
  this.scores = []
}

Game.prototype.turn = function(bowl) {
  bowl.throw();
  bowl.domino();
  return bowl.score();
}

Game.prototype.frameSet = function() {
  bowl = new Bowl();
  var score1 = this.turn(bowl)
  var score2 = this.turn(bowl)
  this.scores.push(score2)
  if (score1 == 10) return 'Strike!';
  if (score2 == 10) return 'Spare!';
  if (score2 < 10) return 'Turn over';
}

Game.prototype.lastFrame = function() {
  bowl = new Bowl();
  var score1 = this.turn(bowl)
  var score2 = this.turn(bowl)
  var score3 = this.turn(bowl)
  this.scores.push(score3)
}

Game.prototype.play = function() {
  for (y = 1; y < 10; y++) {
    this.frameSet();
  }
  this.lastFrame();
}

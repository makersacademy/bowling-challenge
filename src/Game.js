function Game() {
  this.score = new Score()
  this.frame = 1
 };

Game.prototype.totalFrame = function(rollOne, rollTwo) {
  this.score.roll(rollOne)
  this.score.roll(rollTwo)
  this.frame += 1
  if (this.score.total() > 10) {
    throw 'Cannot score more than 10 per frame'
  }
  return this.score.total()
};

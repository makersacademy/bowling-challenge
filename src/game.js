function Game() {
  this.scoreCard = [];
}

var rollOne;
var rollTwo;
var frame = [rollOne, rollTwo];

Game.prototype.addFrame = function(frame) {
  return this.scoreCard.push(frame);
};

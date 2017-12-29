function Game() {
  this.framesList = [];
}

Game.prototype.newFrame = function(firstBowl, secondBowl) {
  frame = new Frame();
  frame.bowl(firstBowl, secondBowl);
  this.framesList.push(frame.bowls);
}

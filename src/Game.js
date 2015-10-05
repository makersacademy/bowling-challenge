function Game() {
  this.frameList = new Array;
};

Game.prototype.addFrame = function(frame) {
  this.frameList.push(frame);
};

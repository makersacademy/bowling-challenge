function Game() {
  this.frames = []
  this.currentFrame = 0
}

Game.prototype.addFrame = function () {
  this.currentFrame += 1
  this.frames.push([this.currentFrame,[]])
};

Game.prototype.addBowl = function (score) {
  this.frames[0][1].push(score)
  console.log(this);
};

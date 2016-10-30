function Game() {
  this.frames = [[]];
  this.bonusCount = 0;
  this.currentFrame = 0;
}

Game.prototype.addScore = function(score) {
  if (this.frames[this.currentFrame].length == 2) {
    this.currentFrame += 1;
    this.frames.push([]);
  }

  this.frames[this.currentFrame].push(score);

  if (score === 10) {
    this.bonusCount += 2;
  }
};

function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1
  this._pushFrame()
};

Game.prototype.bowl = function(pins, bowls = 1) {
  this.currentFrame.bowl(pins)
  if(this.frameIndex >= 10) {
    console.log("Game over");
  } else if(this.currentFrame.isAStrike()) {
    this._nextFrame();
  } else if(this.currentFrame.bowlIndex > 2) {
    this._nextFrame();
  };
};

Game.prototype._nextFrame = function() {
  this.currentFrame = new Frame();
  this._pushFrame();
  this.frameIndex++;
};

Game.prototype._pushFrame = function() {
  this.frames.push(this.currentFrame);
};

Game.prototype.score = function() {
  var score = 0;

  for(var i = 0; i < this.frameIndex; i++)
    if(this.frames[i].isASpare()) {
      score += 10 + this.spareBonus(i);
    } else {
      score += this.frames[i].frameScore();
    }
  return score;
};

Game.prototype.spareBonus = function(index) {
  return this.frames[index + 1].bowls[0];
};

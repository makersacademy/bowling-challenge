function Game() {
  this.frames = [];
  this.frameScore = 0;
};


Game.prototype.runFrame = function(scores) {
  this.frames.push(scores);
  this._setFrame();
};

Game.prototype.score = function(frame){
  this.frameScore = 0
  for (var i = 0; i < this.frames[frame -1].length; i++) {
    this.frameScore += this.frames[frame - 1][i];
  }
  if (this.frameScore === 10  && this.frames[frame - 1][0]  === 10)
    {   for (var i = 0; i < this.frames[frame].length; i++) {
        this.frameScore += this.frames[frame][i];
      }
      if (this.frames[frame][0] === 10) {
        this.frameScore += this.frames[frame + 1][0]
      }
    }
    else if (this.frameScore === 10) {
      this.frameScore += this.frames[frame][0]
    }
}

Game.prototype._setFrame = function() {
  if (this.frames.length === 9) {
    this.finalFrame = !this.finalFrame
  }
}

function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1
  this._pushFrame()
  MAX_FRAMES = 10
};

Game.prototype.bowl = function(pins) {
  this.currentFrame.bowl(pins)
  if(this.frameIndex < MAX_FRAMES) {
    if(this.currentFrame.isAStrike() || this.currentFrame.bowlIndexTwo()) {
      this._nextFrame();
    };
  } else {
    this._finalFrame();
  };
};

Game.prototype.score = function() {
  var score = 0;

  for(var index = 0; index < this.frameIndex; index++)
    if(this.frames[index].isAStrike()) {
      score += MAX_PINS + this._strikeBonus(index);
    } else if(this.frames[index].isASpare()) {
      score += MAX_PINS + this._spareBonus(index);
    } else {
      if(index < this.frameIndex-1) {
        score += this.frames[index].frameTotal();
      } else {
        score += this.frames[index].finalFrameTotal();
      };
    };
  return score;
};

Game.prototype._pushFrame = function() {
  this.frames.push(this.currentFrame);
};

Game.prototype._nextFrame = function() {
  this.currentFrame = new Frame();
  this._pushFrame();
  this.frameIndex++;
};

Game.prototype._finalFrame = function() {
  if(this.currentFrame.isAStrike()) {
    if(this.currentFrame.bowlIndexThree()) {console.log("Game Over")};
  } else if(this.currentFrame.bowlIndexTwo()) {
    if(!this.currentFrame.isASpare()) {
      console.log("Game Over");
    } else if(this.currentFrame.bowlIndexThree()) {
      console.log("Game Over");
    };
  };
};

Game.prototype._spareBonus = function(index) {
  if(index < this.frameIndex-1) {
    return this.locateBowl(index, 1, 0);
  } else{
    return this._finalFrameSpareBonus(index);
  };
};

Game.prototype._strikeBonus = function(index) {
  if(index < this.frameIndex-2) {
    if(this.frames[index + 1].isAStrike()) {
      return this.locateBowl(index, 1, 0) + this.locateBowl(index, 2, 0);
    } else {
      return this.locateBowl(index, 1, 0) + this.locateBowl(index, 1, 1);
    };
  } else {
    return this._finalFrameStrikeBonus(index);
  };
};

Game.prototype._finalFrameSpareBonus = function(index) {
  return this.locateBowl(index, 0, 2);
};

Game.prototype._finalFrameStrikeBonus = function(index) {
  if(index < this.frameIndex-1) {
    return this.locateBowl(index, 1, 0) + this.locateBowl(index, 1, 1);
  } else {
    return this.locateBowl(index, 0, 1) + this.locateBowl(index, 0, 2);
  };
};

Game.prototype.locateBowl = function(index, skipForwardBy, bowlIndex) {
  return this.frames[index + skipForwardBy].bowls[bowlIndex];
}

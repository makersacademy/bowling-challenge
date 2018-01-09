function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1;
  this._pushFrame();
  this.gameOver = false;
  MAX_FRAMES = 10;
};

Game.prototype.bowl = function(pins) {
  this.currentFrame.bowl(pins);
  if(this.frameIndex < MAX_FRAMES) {
    if(this.currentFrame.isAStrike() || this.currentFrame.bowlIndexTwo()) {
      this._nextFrame();
    };
  } else {
    this.currentFrame.finalFrame = true
    this._finalFrame();
  };
};

Game.prototype.score = function() {
  var score = 0;

  if(this.currentFrame.finalFrame) {
    for(var index = 0; index < this.frameIndex; index++)
      score += this.runningTotal(index);
  } else {
    for(var index = 0; index < this.frameIndex-1; index++)
      score += this.runningTotal(index);
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
  if(this.currentFrame.bowlIndexThree()) {
      this._gameOver();
  } else if(this.currentFrame.bowlIndexTwo()) {
    if(!this.currentFrame.isAStrike() && !this.currentFrame.isASpare()) {
      this._gameOver();
    };
  };
};

Game.prototype._spareBonus = function(index) {
  if(index < this.frameIndex-1) {
    return this._locateBowl(index, 1, 0);
  } else{
    return this._finalFrameSpareBonus(index);
  };
};

Game.prototype._strikeBonus = function(index) {
  if(index < this.frameIndex-2) {
    if(this.frames[index + 1].isAStrike()) {
      return this._locateBowl(index, 1, 0) + this._locateBowl(index, 2, 0);
    } else {
      return this._locateBowl(index, 1, 0) + this._locateBowl(index, 1, 1);
    };
  } else {
    return this._finalFrameStrikeBonus(index);
  };
};

Game.prototype._finalFrameSpareBonus = function(index) {
  return this._locateBowl(index, 0, 2);
};

Game.prototype._finalFrameStrikeBonus = function(index) {
  if(index < this.frameIndex-1) {
    return this._locateBowl(index, 1, 0) + this._locateBowl(index, 1, 1);
  } else {
    return this._locateBowl(index, 0, 1) + this._locateBowl(index, 0, 2);
  };
};

Game.prototype.runningTotal = function(index) {
  var score = 0;

  if(this.frames[index].isAStrike()) {
    if(isNaN(this._strikeBonus(index))) {
      score += 0;
    } else {
      score += MAX_PINS + this._strikeBonus(index);
    }
  } else if(this.frames[index].isASpare()) {
    if(isNaN(this._spareBonus(index))) {
      score += 0;
    } else {
      score += MAX_PINS + this._spareBonus(index);
    };
  } else {
    if(this.frames[index].finalFrame) {
      score += this.frames[index].finalFrameTotal();
    } else {
      score += this.frames[index].frameTotal();
    };
  };
  return score;
};

Game.prototype._gameOver = function() {
  this.gameOver = true;
};

Game.prototype._locateBowl = function(index, skipForwardBy, bowlIndex) {
  return this.frames[index + skipForwardBy].bowls[bowlIndex];
}

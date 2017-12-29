function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1
  this._pushFrame()
};

Game.prototype.bowl = function(pins, bowls = 1) {
  this.currentFrame.bowl(pins)
  if(this.frameIndex < 10) {
    if(this.currentFrame.isAStrike()) {
      this._nextFrame();
    } else if(this.currentFrame.bowlIndex > 2) {
      this._nextFrame();
    };
  } else {
    this.finalFrame();
  };
};

Game.prototype.finalFrame = function() {
  if(this.currentFrame.isAStrike()) {
    if(this.currentFrame.bowlIndex > 3) {console.log("Game Over")};
  } else if(this.currentFrame.bowlIndex > 2) {
    if(!this.currentFrame.isASpare()) {
      console.log("Game Over");
    } else if(this.currentFrame.bowlIndex > 3) {
      console.log("Game Over");
    };
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

  for(var i = 0; i < 8; i++)
    if(this.frames[i].isAStrike()) {
      score += MAX_PINS + this.strikeBonus(i);
    } else if(this.frames[i].isASpare()) {
      score += MAX_PINS + this.spareBonus(i);
    } else {
      score += this.frames[i].frameScore();
    }
  for(var i = 8; i < 10; i++)
    if(this.frames[i].isAStrike()) {
      score += MAX_PINS + this.strikeBonus(i);
    } else if(this.frames[i].isASpare()) {
      score += MAX_PINS + this.spareBonus(i);
    } else {
      score += this.frames[i].finalFrameScore();
    }
  return score;
};

Game.prototype.spareBonus = function(index) {
  if(index > 8) {
    return this.finalFrameSpareBonus(index);
  } else{
    return this.frames[index + 1].bowls[0];
  }
};

Game.prototype.strikeBonus = function(index) {
  if(index > 7) {
    return this.finalFrameStrikeBonus(index);
  } else {
    if(this.frames[index + 1].isAStrike()) {
      return this.frames[index + 1].bowls[0] + this.frames[index + 2].bowls[0];
    } else {
      return this.frames[index + 1].bowls[0] + this.frames[index + 1].bowls[1];
    };
  };
};

Game.prototype.finalFrameSpareBonus = function(index) {
  return this.frames[index].bowls[2];
};

Game.prototype.finalFrameStrikeBonus = function(index) {
  if(index < 9) {
    return this.frames[index + 1].bowls[0] + this.frames[index + 1].bowls[1];
  } else {
    return this.frames[index].bowls[1] + this.frames[index].bowls[2];
  };
};

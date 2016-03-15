function Game() {
  this._frames = [];
  this._score = 0;
  this._currentFrame = 1;
  this._currentRoll = 1;
}

function Frame() {
  this._frameScore = 0;
  this._rolls = [];
}

Game.prototype.nextBowl = function(pinsdowned) {
  if(this._currentRoll === 4) {
    throw new TypeError("Don't cheat!!!");
  }
  var frame;
  if(typeof this.activeFrame() === 'undefined') {
    frame = new Frame();
    frame.bowl(pinsdowned);
    this._frames.push(frame);
    this.updateFrameScores();
  } else {
    if(this._currentFrame !== 10) {
      if(this.activeFrame().firstRoll() + pinsdowned > 10) {
        throw new TypeError("Don't cheat!!!");
      }
    } else {
      if(typeof this.activeFrame().secondRoll() !== 'undefined') {
        if(this.activeFrame().secondRoll() !== 10) {
          if(this.activeFrame().secondRoll() + pinsdowned > 10) {
            throw new TypeError("Don't cheat!!!");
          }
        }
      }
    }
    this.activeFrame().bowl(pinsdowned);
    this.updateFrameScores();
  }
};

Game.prototype.updateCurrentFrame = function() {
  if(typeof this.activeFrame().secondRoll() === 'undefined') {
    this._currentRoll += 1;
    if(this._currentFrame !== 10) {
      if(this.activeFrame().isStrike()) {
        this._currentFrame += 1;
        this._currentRoll = 1;
      }
    }
  } else {
    if(this._currentFrame !== 10) {
      this._currentFrame += 1;
      this._currentRoll = 1;
    } else {
      if(this.activeFrame().isSpare() || this.activeFrame().isStrike()) {
        this._currentRoll += 1;
      }
    }
  }
};

Frame.prototype.bowl = function(pinsdowned) {
  this._rolls.push(pinsdowned);
};

Game.prototype.updateFrameScores = function() {
  if(typeof this.activeFrame().secondRoll() === 'undefined') {
    this.activeFrame()._frameScore += this.activeFrame().firstRoll();
    this._score += this.activeFrame().firstRoll();
      if(this._frames.length > 1) {
        if(this.previousFrame().isStrike()) {
          this.previousFrame()._frameScore += this.activeFrame().firstRoll();
          this._score += this.activeFrame().firstRoll();
        }
        if(this.previousFrame().isSpare()) {
          this.previousFrame()._frameScore += this.activeFrame().firstRoll();
          this._score += this.activeFrame().firstRoll();
        }
      }
      if(this._frames.length > 2) {
        if(this.twoFramesAgo().isStrike() && this.previousFrame().isStrike()) {
          this.twoFramesAgo()._frameScore += this.activeFrame().firstRoll();
          this._score += this.activeFrame().firstRoll();
        }
      }
  } else {
    if(typeof this.activeFrame().thirdRoll() === 'undefined') {
      this.activeFrame()._frameScore += this.activeFrame().secondRoll();
      this._score += this.activeFrame().secondRoll();
        if(this._frames.length > 1 && this.previousFrame().isStrike()) {
          this.previousFrame()._frameScore += this.activeFrame().secondRoll();
          this._score += this.activeFrame().secondRoll();
      }
      if(this._currentFrame === 10) {
        if(this.previousFrame().isStrike() && this.activeFrame().isStrike()) {
          if(this._currentRoll === 1) {
            this.previousFrame()._frameScore += this.activeFrame().secondRoll();
          }
        }
      }
    }
  }

  if(this._currentFrame === 10 && this.activeFrame().isSpareOrStrike()) {
    if(this.activeFrame()._rolls.length > 2) {
      this.activeFrame()._frameScore += this.activeFrame().thirdRoll();
      this._score += this.activeFrame().thirdRoll();
    }
  }
};

Game.prototype.activeFrame = function() {
  return this._frames[this._currentFrame-1];
};

Game.prototype.previousFrame = function() {
  return this._frames[this._currentFrame-2];
};

Game.prototype.twoFramesAgo = function() {
  return this._frames[this._currentFrame-3];
};

Game.prototype.gameOver = function() {
  if(this._currentFrame === 10 && this.activeFrame()._rolls.length > 1) {
    if(this._currentRoll > 2 || (this.activeFrame().isSpareOrStrike() === false)) {
      return true;
    } else {
      return false;
    }
  }
};

Game.prototype.gutterGame = function() {
  if(this.gameOver() && this._score === 0) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.perfectGame = function() {
  if(this._score === 300) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isSpare = function(){
  if(this.firstRoll()+this.secondRoll() === 10) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isStrike = function() {
  if(this.firstRoll() === 10) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isSpareOrStrike = function() {
  if(this.isStrike() || this.isSpare()) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.firstRoll = function(frame) {
  return this._rolls[0];
};

Frame.prototype.secondRoll = function(frame) {
  return this._rolls[1];
};

Frame.prototype.thirdRoll = function(frame) {
  return this._rolls[2];
};

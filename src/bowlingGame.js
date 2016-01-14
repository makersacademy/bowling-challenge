function Game() {
  this._frames = [];
  this._score = 0;
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
  // this.addFirstRoll(frame);
  // if(frame.isStrike() === false) {
  //   this.addSecondRoll(frame);
  // }
  //
  // if(this._frames.length > 1) {
  //   if(this.previousFrame().isSpare()){
  //     this.addFirstRoll(frame);
  //   }
  //   if(this.previousFrame().isStrike()) {
  //     this.addFirstRoll(frame);
  //     if(frame.isStrike() === false) {
  //       this.addSecondRoll(frame);
  //     }
  //   }
  // }
  //
  // if(this._frames.length > 2) {
  //   if((this.twoFramesAgo().isStrike) && (this.previousFrame().isStrike)) {
  //     this.addFirstRoll(frame);
  //   }
  // }
  //
  // if(frame._tenthFrame === true) {
  //   if(frame.isSpare()){
  //     this.addThirdRoll(frame);
  //   }
  //   if(frame.isStrike()){
  //     this.addSecondRoll(frame);
  //     this.addThirdRoll(frame);
  //   }
  // }

  this.updateFrameScores(frame);
  this.updateTotalScore(frame);

};

Game.prototype.updateFrameScores = function(frame) {
  if(frame.isStrike() === false && frame.isSpare() === false) {
    frame._frameScore += frame.firstRoll();
    frame._frameScore += frame.secondRoll();
  }

  if(this._frames.length > 1) {
    if(this.previousFrame().isSpare()){
      this.previousFrame()._frameScore += 10 + frame.firstRoll();
    }
    if(this.previousFrame().isStrike() && (frame.isStrike() === false)) {
      this.previousFrame()._frameScore += 10 + frame.firstRoll() + frame.secondRoll();
    }
  }

  if(this._frames.length > 2) {
    if((this.twoFramesAgo().isStrike) && (this.previousFrame().isStrike)) {
      this.twoFramesAgo()._frameScore += 10 + this.previousFrame().firstRoll() + frame.firstRoll();
    }
  }

  if(frame._tenthFrame === true) {
    if(frame.isSpare() || frame.isStrike()){
      frame._frameScore += frame.firstRoll() + frame.secondRoll() + frame.thirdRoll();
    }
  }

};

Game.prototype.updateTotalScore = function(frame) {
  this._score += frame._frameScore;
  if(this._frames.length > 2) {
    if(this.twoFramesAgo().isStrike() && this.previousFrame().isStrike()) {
      this._score += this.twoFramesAgo()._frameScore;
    }
  }
  if(this._frames.length > 1) {
    if(this.previousFrame().isStrike() || this.previousFrame().isSpare()) {
      this._score += this.previousFrame()._frameScore;
    }
  }
};

function Frame(tenthFrame) {
  this._pins = 10;
  this._rolls = [];
  this._tenthFrame = tenthFrame;
  this._frameScore = 0;
}

Frame.prototype.bowl = function(pinsdowned){

  if(this._rolls.length >= 2) {
    if(this._tenthFrame && (this.isSpare() || this.isStrike())) {
      if(this._rolls.length >= 3) {
        throw new TypeError("You have used all your rolls in this frame");
      }
    } else {
      throw new TypeError("You have used all your rolls in this frame");
    }
  }

  // if(this.isStrike()){
  //   if(this._tenthFrame && this._rolls.length >= 3){
  //     throw new TypeError("You have used all your rolls in this frame");
  //   }
  // }

  this._pins -= pinsdowned;
  this._rolls.push(pinsdowned);

  if(this._tenthFrame && (this.isSpare() || this.isStrike())) {
    this.resetPins();
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

Frame.prototype.firstRoll = function(frame) {
  return this._rolls[0];
};

Frame.prototype.secondRoll = function(frame) {
  return this._rolls[1];
};

Frame.prototype.thirdRoll = function(frame) {
  return this._rolls[2];
};

Frame.prototype.resetPins = function() {
  this._pins += 10;
};

Game.prototype.addFirstRoll = function(frame) {
  this._score += frame._rolls[0];
};

Game.prototype.addSecondRoll = function(frame) {
  this._score += frame._rolls[1];
};

Game.prototype.addThirdRoll = function(frame) {
  this._score += frame._rolls[2];
};

Game.prototype.previousFrame = function() {
  return (this._frames[this._frames.length - 2]);
};
Game.prototype.twoFramesAgo = function() {
  return (this._frames[this._frames.length - 3]);
};

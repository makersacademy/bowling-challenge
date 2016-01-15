function Game() {
  this._frames = [];
  this._score = 0;
  this._currentFrame = 1;
}

function Frame() {
  this._frameScore = 0;
  this._rolls = [];
}

Game.prototype.nextBowl = function(pinsdowned) {
  var frame;
  if(typeof this._frames[this._currentFrame-1] === 'undefined') {
    frame = new Frame();
    frame.bowl(pinsdowned);
    this._frames.push(frame);
    this.updateFrameScores();
    if(this._currentFrame != 10) {
      if(this.activeFrame().isStrike()) {
        this._currentFrame += 1;
      }
    }
  } else {
    this._frames[this._currentFrame-1].bowl(pinsdowned);
    this.updateFrameScores();
    if(this._currentFrame != 10) {
      this._currentFrame +=1;
    }
  }
};

Frame.prototype.bowl = function(pinsdowned) {
  this._rolls.push(pinsdowned);
};

Game.prototype.updateFrameScores = function() {
  if(typeof this._frames[this._currentFrame-1]._rolls[1] === 'undefined') {
    this.activeFrame()._frameScore += this.activeFrame().firstRoll();
      if(this._frames.length > 1 && this.previousFrame().isStrike()) {
        this.previousFrame()._frameScore += this.activeFrame().firstRoll();
      }
  } else {
    if(typeof this.activeFrame()._rolls[2] === 'undefined') {
      this.activeFrame()._frameScore += this.activeFrame().secondRoll();
        if(this._frames.length > 1 && this.previousFrame().isStrike()) {
          this.previousFrame()._frameScore += this.activeFrame().secondRoll();
      }
    }
  }
  if(this._frames.length > 1) {
    if(this.previousFrame().isSpare()) {
      this.previousFrame()._frameScore += this.activeFrame().firstRoll();
    }
  }

  if(this._frames.length > 2) {
    if(this.twoFramesAgo().isStrike() && this.previousFrame().isStrike()) {
      this.twoFramesAgo()._frameScore += this.activeFrame().firstRoll();
    }
  }

  if(this._currentFrame === 10 && (this.activeFrame().isSpare() || this.activeFrame().isStrike())) {
    if(this.activeFrame()._rolls.length > 2) {
      this.activeFrame()._frameScore += this.activeFrame().thirdRoll();
    }
  }
};

// Game.prototype.updateGameScore = function() {
//   if(typeof this._frames[this._currentFrame-1]._rolls[1] === 'undefined') {
//
//   }
//   if(this.currentFrame().isSpare() === false && this.currentFrame().isStrike()) {
//     this._score += this.currentFrame().firstRoll();
//     this._score += this.currentFrame().secondRoll();
//   }
// };

Game.prototype.activeFrame = function() {
  return this._frames[this._currentFrame-1];
};

Game.prototype.previousFrame = function() {
  return this._frames[this._currentFrame-2];
};

Game.prototype.twoFramesAgo = function() {
  return this._frames[this._currentFrame-3];
};


// function Game() {
//   this._frames = [];
//   this._score = 0;
//   this._currentFrame = 1;
//   this._roll = 0;
// }
//
// Game.prototype.nextBowl = function(pinsdowned) {
//   var frame;
//   if(typeof this._frames[this._currentFrame-1] === 'undefined') {
//     frame = new Frame();
//     frame.bowl(pinsdowned);
//     this._frames.push(frame);
//     this.updateFrameScores();
//       if(this._frames.length > 0) {
//         if(this._frames[this._currentFrame-1].isStrike()) {
//           if(this._currentFrame != 10) {
//               this._currentFrame += 1;
//           }
//         }
//       }
//   } else {
//     this._frames[this._currentFrame-1].bowl(pinsdowned);
//     this.updateFrameScores();
//     this.updateTotalScore(this._frames[this._currentFrame-1]);
//     this._currentFrame += 1;
//   }
// };
//
// Game.prototype.addFrame = function(frame){
//   this._frames.push(frame);
//   this.updateFrameScores(frame);
//   this.updateTotalScore(frame);
//   this.currentFrame += 1;
//
// };
//
// Game.prototype.updateFrameScores = function() {
//   if(this.liveFrame().isStrike() === false && this.liveFrame().isSpare() === false) {
//     this.liveFrame()._frameScore += this.liveFrame()._rolls[0];
//     debugger;
//   }
//   // if(this.liveFrame().isStrike() === false && this.liveFrame().isSpare() === false) {
//   //   this.liveFrame()._frameScore += this.liveFrame().firstRoll();
//   //   this.liveFrame()._frameScore += this.liveFrame().secondRoll();
//   // }
//
//
//
//   // if(this._frames.length > 1) {
//   //   if(this.previousFrame().isSpare()){
//   //     this.previousFrame()._frameScore += 10;
//   //   }
//   //   if(this.previousFrame().isStrike() && (this.currentFrame().isStrike() === false)) {
//   //     this.previousFrame()._frameScore += 10 + this.currentFrame().firstRoll() + this.currentFrame().secondRoll();
//   //   }
//   // }
//   //
//   // if(this._frames.length > 2) {
//   //   if((this.twoFramesAgo().isStrike) && (this.previousFrame().isStrike)) {
//   //     this.twoFramesAgo()._frameScore += 10 + this.previousFrame().firstRoll() + this.currentFrame().firstRoll();
//   //   }
//   // }
//   //
//   // if(frame._tenthFrame === true) {
//   //   if(frame.isSpare() || frame.isStrike()){
//   //     frame._frameScore += frame.firstRoll() + frame.secondRoll() + frame.thirdRoll();
//   //   }
//   // }
//
// };
//
// Game.prototype.updateTotalScore = function(frame) {
//   this._score += frame._frameScore;
//   if(this._frames.length > 2) {
//     if(this.twoFramesAgo().isStrike() && this.previousFrame().isStrike()) {
//       this._score += this.twoFramesAgo()._frameScore;
//     }
//   }
//   if(this._frames.length > 1) {
//     if(this.previousFrame().isStrike() || this.previousFrame().isSpare()) {
//       this._score += this.previousFrame()._frameScore;
//     }
//   }
// };
//
// function Frame(tenthFrame) {
//   this._pins = 10;
//   this._rolls = [];
//   this._tenthFrame = tenthFrame;
//   this._frameScore = 0;
//   this._currentRoll = 0;
// }
//
// Frame.prototype.bowl = function(pinsdowned){
//
//   this._currentRoll += 1;
//   if(this._rolls.length >= 2) {
//     if(this._tenthFrame && (this.isSpare() || this.isStrike())) {
//       if(this._rolls.length >= 3) {
//         throw new TypeError("You have used all your rolls in this frame");
//       }
//     } else {
//       throw new TypeError("You have used all your rolls in this frame");
//     }
//   }
//
//   // if(this.isStrike()){
//   //   if(this._tenthFrame && this._rolls.length >= 3){
//   //     throw new TypeError("You have used all your rolls in this frame");
//   //   }
//   // }
//
//   this._pins -= pinsdowned;
//   this._rolls.push(pinsdowned);
//
//   if(this._tenthFrame && (this.isSpare() || this.isStrike())) {
//     this.resetPins();
//   }
// };
//
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
//
// Frame.prototype.resetPins = function() {
//   this._pins += 10;
// };
//
// Frame.prototype.currentRollScore = function() {
//   return this._rolls[this._currentRoll - 1];
// };
//
// Game.prototype.isTenthFrame = function() {
//   if(this._frames[10] !== null) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Game.prototype.addFirstRoll = function(frame) {
//   this._score += frame._rolls[0];
// };
//
// Game.prototype.addSecondRoll = function(frame) {
//   this._score += frame._rolls[1];
// };
//
// Game.prototype.addThirdRoll = function(frame) {
//   this._score += frame._rolls[2];
// };
//
// Game.prototype.previousFrame = function() {
//   return (this._frames[this._frames.length - 2]);
// };
// Game.prototype.twoFramesAgo = function() {
//   return (this._frames[this._frames.length - 3]);
// };
//
// Game.prototype.liveFrame = function() {
//   return (this._frames[this._currentFrame-1]);
// };

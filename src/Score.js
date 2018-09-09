function Game(frame = new Frame()) {
  // This tracks the overall player score
  this.score = 0
  this.frames = [frame]
  this.cumulatives = []
};

Game.prototype.add_score = function(score) {
  currentframe = this.frames[this.frames.length - 1]
  currentframe.add_score(score);

  this._checkPrevBonusAndCumul()
  this._checkPrevBonusAndCumul()

  if (this._currentFrameOver()) {
    this._checkCurrentFrameBonus()
    this.score = this.cumulatives[this.cumulatives.length - 1]
    this._add_frame();
  }
};

// Game.prototype._checkBonusReady = function () {
//   if (this.frames.length > 2) {
//     twobackframe = this.frames[this.frames.length - 3]
//     if (twobackframe.bonusAdded === false) {
//       // add the two back bonus
//     } else {
//       previousframe = this.frames[this.frames.length - 2]
//       if (previousframe.bonusAdded === false) {
//         // check the prev bonus
//       }
//     }
//   }
//   if (this.frames.length > 1) {
//     previousframe = this.frames[this.frames.length - 2]
//     if (previousframe.bonusAdded === false) {
//       // check the prev bonus
//     }
//   }
// }

Game.prototype._checkPrevBonusAndCumul = function () {
  console.log('prev has bonus: ', this._prevHasBonus());

  if (this._prevHasBonus()) {

    console.log('bonus not added: ', this._bonusNotAdded());
    if (this._bonusNotAdded()) {

      console.log('has prev bonus and not added');
      if (this.allBonusBallsRolled()) {
        console.log('all balls rolled');
        this._add_bonus();
        // Add the cumulative to the cumulative array
      } else {

      }
    } else {
    console.log('No prev bonus');
    }
  }
};

Game.prototype._checkCurrentFrameBonus = function() {
  lenFrames = this.frames.length
  currentframe = this.frames[lenFrames - 1]
  if (currentframe.bonusBalls === 0) {
    this.cumulatives.push(this.newTotal())
  }
}

Game.prototype._prevHasBonus = function () {
  lenFrames = this.frames.length
  currentframe = this.frames[lenFrames - 1]
  if (lenFrames > 1) {
    //doesn't check for bonus if on the first frame still
    previousFrame = this.frames[lenFrames - 2]
    if (previousFrame.bonusBalls > 0) {
      return true;
    } else {
      return false;
    }
  }
}

Game.prototype._bonusNotAdded = function() {
  lenFrames = this.frames.length
  previousFrame = this.frames[lenFrames - 2]
  if (previousFrame.bonusAdded === false) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.allBonusBallsRolled = function () {
    lenFrames = this.frames.length
    lenCumulatives = this.cumulatives.length
    currentframe = this.frames[lenFrames - 1]
    framePendingTotal = this.frames[lenCumulatives] // The one after the last cumulative score
    requiredBalls = framePendingTotal.bonusBalls
    console.log('Required balls: ', requiredBalls);
    console.log('Current frame ball', currentframe.ball)

    // if lenCumulatives + 2 === lenFrames then only one frame is pending a bonus
    // for a spare this means can add it after the first ball
    // for a strike this means can add it after the second ball
    if (lenCumulatives + 2 === lenFrames && currentframe.ball === requiredBalls) {
      // all bonus balls are rolled in this roll, one frame after the strike or spare
      return true;
    } else if ( lenCumulatives + 3 === lenFrames && currentframe.ball === 1 ) {
      // made it past the last check in previous frame so must have been a strike
      // hence only one ball ever needed in this round
      return true;
    } else {
      return false;
    }
}

Game.prototype._add_bonus = function () {
  currentframe = this.frames[this.frames.length - 1]
  previousframe = this.frames[this.frames.length - 2]

  if (this.frames.length > 2) {
    twobackframe = this.frames[this.frames.length - 3]
    if (twobackframe.bonusAdded === false) {
      twobackframe.add_bonus(10+currentframe.scores[0])
      this.cumulatives.push(this.newTotal())
      return;
    }
  }
  if (previousframe.bonusBalls == 1) {
    previousframe.add_bonus(currentframe.scores[0])
    this.cumulatives.push(this.newTotal())
  } else if (previousframe.bonusBalls == 2) {
    if (currentframe.scores[0] != 10) {
      previousframe.add_bonus(currentframe.flatscore)
      this.cumulatives.push(this.newTotal())
    }
  }
}

Game.prototype.newTotal = function () {
  lenCumulatives = this.cumulatives.length
  if (lenCumulatives > 0) {
    lastTotal = this.cumulatives[lenCumulatives - 1]
  } else {
    lastTotal = 0
  }
  frameToAdd = this.frames[this.cumulatives.length]
  flatFrame = frameToAdd.flatscore
  bonusFrame = frameToAdd.bonusscore
  return flatFrame + bonusFrame + lastTotal;
}



Game.prototype._currentFrameOver = function() {
  return this.frames[this.frames.length - 1].isOver;
};

Game.prototype._add_frame = function(frame = new Frame()) {
  this.frames.push(frame)
};



// Game.prototype._endOfFrameProcess = function() {
//   this.score = this.cumulatives[this.cumulatives.length - 1]
//   this._add_frame();
//
// };
//
// Game.prototype.updateScore = function() {
//   this.updateFlat()
//   this.updateBonus()
//   this.updateDelayedBonus()
//   return this.score;
// };
//
// Game.prototype.updateFlat = function() {
//   frame = this.frames[this.frames.length - 1]
//   this.scoreUpdate(frame.flatscore)
// }
//
// Game.prototype.updateBonus = function() {
//   if (this.frames.length > 1) {
//     frame = this.frames[this.frames.length - 2]
//     this.scoreUpdate(frame.bonusscore)
//   }
// }
//
// Game.prototype.updateDelayedBonus = function() {
//   if (this.frames.length > 2) {
//     frame = this.frames[this.frames.length - 3]
//     this.scoreUpdate(frame.bonusscore)
//   }
// }
//
// Game.prototype.scoreUpdate = function(gain) {
//     this.score += gain
// }

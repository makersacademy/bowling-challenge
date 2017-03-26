"use strict";

function Game () {
  this.totalScore = 0;
  this.frame = 1;
  this.current_frame = new Frame()
  this.bonusFramePoints = []
  this.bonusFrame = 0
  this.log = [];
};

Game.prototype.nextFrame = function() {
  if (this.isFinished()) {
    this.giveBonusFrame()
    return
  } else {
    this.frame ++;
  };
};

Game.prototype.addPoints = function(points) {
  this.current_frame.addPoints(points)
  this._move_to_next_frame()
  this.sumPoints()
};

Game.prototype._move_to_next_frame = function() {
  if (this.current_frame.roll === 2) {
    this.saveFrame(this.current_frame)
    this.nextFrame()
    this.calculateBonuses()
    this.current_frame = new Frame
  }
};

Game.prototype.giveBonusFrame = function() {
  if (this.frame == 10) {
    if (this.finalFrameIsStrike()) {
      this.bonusFrame = new BonusFrame("strike");
    } else if (this.finalFrameIsSpare()) {
      this.bonusFrame = new BonusFrame("spare");
    };
  };
};

Game.prototype.addFinalBonusPoints = function(points) {
  this.bonusFrame.addPoints(points)
  this.bonusFrame.nextRoll()
  if (this.bonusFrame.endGame === true) {
    this.sumFinalBonusPoints(this.bonusFrame.score)
  };
  this.sumPoints();
};



Game.prototype.sumFinalBonusPoints = function(points) {
  this.addPenultimateFrameStrikeBonus();
  this.log[9].totalScore += points;
};

Game.prototype.addPenultimateFrameStrikeBonus = function() {
  if (this.log[8].strike) {
    this.log[8].totalScore += this.bonusFrame.scores[0];
  }
};


Game.prototype.sumPoints = function() {
  var total = 0;
  this.log.forEach(function(frame) {
    total += frame.totalScore;
  });
  this.totalScore = total;
};

Game.prototype.calculateBonuses = function() {
  if (this.frame > 2) {
    this.addStrikeBonus();
    this.addDoubleStrikeBonus();
    this.addSpareBonus();
  };
};

Game.prototype.addStrikeBonus = function() {
  var index = this._getPreviousFrameIndex()
  if (this._previousFrameIsStrike()) {
    return this.log[index].totalScore += this.log[index + 1].totalScore;
  };
};

Game.prototype.addDoubleStrikeBonus = function() {
  if (this.log.length > 2) {
    var index = this._getPreviousFrameIndex() - 1
    if (this._previousTwoFramesAreStrikes()) {
      return this.log[index].totalScore += this.current_frame.score[0]
    }
  }
};

Game.prototype._previousTwoFramesAreStrikes = function() {
  var index = this._getPreviousFrameIndex() - 1
  return this._previousFrameIsStrike() && this.log[index].strike
}

Game.prototype.addSpareBonus = function() {
  var index = this._getPreviousFrameIndex()
  if (this._previousFrameIsSpare()) {
    return this.log[index].totalScore += this.current_frame.score[0];
  };
};

Game.prototype._getPreviousFrameIndex = function () {
  return (this.log.length - 2)
};

Game.prototype._previousFrameIsStrike = function() {
  var index = this._getPreviousFrameIndex()
  return this.log[index].strike
};

Game.prototype._previousFrameIsSpare = function() {
  var index = this._getPreviousFrameIndex()
  return this.log[index].spare
};

Game.prototype.saveFrame = function(frame) {
  this.log.push(frame);
};

Game.prototype.isFinished = function() {
  return this.frame === 10;
};

Game.prototype.finalFrameIsSpare = function() {
  if (this.isFinished()) {
    return this.log[9].spare;
  }
};

Game.prototype.finalFrameIsStrike = function() {
  if (this.isFinished()) {
    return this.log[9].strike;
  }
};

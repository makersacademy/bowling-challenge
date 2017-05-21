var FrameFile = (function() {
  'use strict';
  var Frame = function(game, isTenth) {
    this.active = false;
    this._priorScore = null;
    this._game = game;
    this._rolls = {
      1 : null,
      2 : null,
      3 : null,
    };
    this._nextRoll = 1;
    if (isTenth) {
      this._isTenth = true;
    } else {
      this._isTenth = false;
    }
  };


  Frame.prototype.setPriorScore = function(priorScore) {
    this._priorScore = priorScore;
  };

  Frame.prototype.isActive = function() {
    return this.active;
  };
  Frame.prototype.activate = function() {
    this.active = true;
  };
  Frame.prototype.deactivate = function() {
    this.active = false;
  };
  Frame.prototype._nextRollIsBonus = function() {
    return (this._nextRoll > 2 && this._rollSum() >= 10);
  };
  Frame.prototype._rollSum = function() {
    return this._rolls[1] + this._rolls[2] + this._rolls[3];
  };
    

  Frame.prototype.processRoll = function(pinsKnockedOver) {
    this._updateRoll(pinsKnockedOver);
    this._activateNextFrameIfAppropriate();
    this._deactivateSelfIfAppropriate();
//    this._passOnScoreIfAvailable();
  };

  Frame.prototype._updateRoll = function(pinsKnockedOver) {
    this._rolls[this._nextRoll] = pinsKnockedOver;
    this._nextRoll += 1;
  };

  Frame.prototype._activateNextFrameIfAppropriate = function() {
    if (this._roll3 !== null) {
      return;
    }
    if (this._roll1 === 10 && this._roll2 === null) {
      this._game.activateNextFrame();
    } else if (this._roll1 !== 10 && this._roll2 !== null) {
      this._game.activateNextFrame();
    }
  };

  Frame.prototype._deactivateSelfIfAppropriate = function() {
    if (this._nextRoll > 3) {
      this.deactivate();
    } else if (this._nextRoll === 3 && !this._nextRollIsBonus()) {
      this.deactivate();
    }
  };

  Frame.prototype._passOnScoreIfAvailable = function() {
    if (this.totalScore() !== null) {
      this._game.passOnScore(this.totalScore(), this);
    }
  };

  Frame.prototype.totalScore = function() {
    if (this.isActive()) {
      return null;
    } else {
      return this._priorScore + this._rollSum();
    }
  };

  Frame.prototype.box1 = function() {
    if (this._roll1 === 10) {
      return 'X';
    } else { 
      return this._roll1;
    }
  };

  Frame.prototype.box2 = function() {
    if (this._roll1 + this._roll2 > 10) {
      return null;
    } else if (this._roll2 === null) {
      return null;
    } else if (this._roll1 + this._roll2 === 10) {
      return '/';
    } else { 
      return this._roll2;
    }
  };

  Frame.prototype.frame10Box2 = function() {
    if (this._isTenth === false) {
      throw "Error: This isn't a tenth frame";
    } else if (this._roll2 === 10) {
      return 'X';
    } else if (this._roll2 === null) {
      return null;
    } else if (this._roll1 + this._roll2 === 10) {
      return '/';
    } else {
      return this._roll2;
    }
  };
  Frame.prototype.frame10Box3 = function() {
    if (this._isTenth === false) {
      throw "Error: This isn't a tenth frame";
    }
    if (this._roll3 === 10) {
      return 'X';
    } else if (this._roll3 === null) {
      return null;
    } else if (this._roll2 + this._roll3 === 10) {
      return '/';
    } else {
      return this._roll3;
    }
  };

  return { Frame : Frame };
}());

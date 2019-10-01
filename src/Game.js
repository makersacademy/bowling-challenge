// 'use strict';
// var Frame = require('./Frame');

function Game(frame = Frame) {
  this.Frame = frame
  this.complete = false;
  this.frameList = [];
  this.lastRound = false;
}

Game.prototype = {

  recordScore: function(score){
      this._recordBall(score);
      this._checkEndOfGame();
      this._addBonusScores();
  },

  getFrameTotal: function(frameNumber) {
    return this.frameList[frameNumber].total;
  },

  isComplete: function() {
    return this.complete;
  },

  calculateTotal: function() {
    let total = 0;
    this.frameList.forEach(function(frame){
      total += frame.total;
    });
    return total;
  },

  _recordBall: function(score) {
    if(this.complete !== true)
    {
      if (this.frameList.length === 9 && this._isPreviousFrameComplete()) {
        this.lastRound = true;
      }

      if(this._isFirstFrame() || this._isPreviousFrameComplete()) {
        this.frameList.push(this._createNewFrame(score));
      }
      else {
        this._addToFrame(score, this.frameList.slice(-1)[0]);
      }
    }
  },

  _isFirstFrame: function() {
    if(this.frameList.length === 0) { return true; }
    else { return false; }
  },

  _isPreviousFrameComplete: function() {
    if(this.frameList.slice(-1)[0].isComplete() === true) { return true; }
    else { return false; }
  },

  _createNewFrame: function(score) {
      let frame = new this.Frame();
      return frame.recordScore(score, this.lastRound);
  },

  _addToFrame: function(score, frame) {
      frame.recordScore(score, this.lastRound);
  },


  _checkEndOfGame: function() {
    if (this.frameList.length === 10 && this.frameList.slice(-1)[0].isComplete() === true) {
      this.complete = true;
    }
  },

  _addBonusScores: function() {
    currentList = this.frameList;
    game = this;
    this.frameList.forEach(function (frame, index) {
      let bonusPoints = 0;
      let nextFrame = currentList[index+1]
      let frameAfterNext = currentList[index+2]
      if(nextFrame) {
        if (frame.isStrike()) {
          bonusBall2 = game._calculateSecondBonus(nextFrame, frameAfterNext);

          if (bonusBall2){
            bonusPoints += nextFrame.firstBall() + bonusBall2;
          }
        }
        else if(frame.isSpare()) {
          bonusPoints += nextFrame.firstBall();
        }
      }
      frame.total += bonusPoints;
    });
  },

  _calculateSecondBonus: function(nextFrame, frameAfterNext) {
    if (nextFrame.isStrike() && frameAfterNext){
      return frameAfterNext.firstBall();;
    }
    else {
      return nextFrame.secondBall();
    }
  },

  // _frameIsBonus: function(frame) {
  //   if(frame.isStrike() || frame.isSpare()) { return true; }
  //   else { return false; }
  // }
}

// Game.prototype.getFrameMessage = function(frameNumber) {
//   console.log(this.frameList[frameNumber]);
//   if(Game.prototype._frameIsBonus(this.frameList[frameNumber]) === true) {
//     return "Bonus!";
//   }
// }

// module.exports = Game;

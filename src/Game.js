// 'use strict';
var Frame = require('./Frame');

function Game(frame = Frame) {
  this.Frame = frame
  this.complete = false;
  this.frameList = [];
  // this.bonuses = [];
  this.lastRound = false;
}

Game.prototype = {

  recordScore: function(score){
      this._recordBall(score);
      this._checkEndOfGame();
      this._addBonusScores();
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

  frameTotals: function() {
    return this.frameList.map(function(frame) {
      return frame.total;
    });
  },

  _isFirstFrame: function() {
    if(this.frameList.length === 0) { return true; }
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
    // else { return false; }
  },

  isComplete: function() {
    return this.complete;
  },

  _isPreviousFrameComplete: function() {
    if(this.frameList.slice(-1)[0].isComplete() === true) { return true; }
    else { return false; }
  },

  _addBonusScores: function() {
    currentList = this.frameList
    this.frameList.forEach(function (frame, index) {
      let bonusPoints = 0;
      let isTen = frame.balls.reduce(function(total, ball) { return total += ball; }, 0);
      if(isTen === 10 && frame.total === 10) {
        if(currentList[index+1]) {
          if (frame.balls.length === 1 ) {
            // strike
            let ball1 = currentList[index+1].balls[0]
            let ball2 = null;
            if (currentList[index+1].balls[0] === 10 && currentList[index+2]){
              ball2 = currentList[index+2].balls[0];
            }
            else {
              ball2 = currentList[index+1].balls[1]
            }

            if (ball2){
              bonusPoints += ball1 + ball2;
            }
          }
          else {
            // spare
            let ball1 = currentList[index+1].balls[0]
            bonusPoints += ball1;
          }
        }
      }
      frame.total += bonusPoints;
    });
  },

  calculateTotal: function() {
    let total = 0;
    this.frameList.forEach(function(frame){
      total += frame.total;
    });
    return total;
  },

  frameIsBonus: function(frame) {
    let isTen = frame.balls.reduce(function(total, ball) { return total += ball; }, 0);

    if(isTen === 10) { return true; }
    else { return false; }
  }
}

Game.prototype.getFrameMessage = function(frameNumber) {
  console.log(this.frameList[frameNumber]);
  if(Game.prototype.frameIsBonus(this.frameList[frameNumber]) === true) {
    return "Bonus!";
  }
}

module.exports = Game;

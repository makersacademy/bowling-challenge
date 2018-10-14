'use strict';

function Game (){
  this._frames = [[], [], [], [], [], [], [], [], [], [],[]]; 
  // this._frames = []
  this._currentScore = 0
  this._currentFrameNumber = 1
  this._frameScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  this._totalScoreDisplay = ["-"]
}

Game.prototype = {
  
  frames : function(){
    return this._frames;
  },

  frameScore: function(index){
    return this._frameScore[index];
  },

  roll : function(number){
    this._frames[this._currentFrameNumber].push(number);

    let frameSum = this._frames[this._currentFrameNumber].reduce(function(a, b){return a+b;}, 0);
    this._frameScore[this._currentFrameNumber] = frameSum;

    // spare
    let previousFrameScore = this._frameScore[this._currentFrameNumber - 1]
    let previousFrameRoll = this._frames[this._currentFrameNumber - 1][0];
    if ( previousFrameScore === 10 || previousFrameRoll === 10) {
      this._frameScore[this._currentFrameNumber - 1] += number;
    }

    //stike change frame score
    if(this._currentFrameNumber > 2){
      let latestRollFrame = this._frames[this._currentFrameNumber - 1][0];
      let previousrollFrame = this._frames[this._currentFrameNumber - 2][0];
      if ( latestRollFrame === 10 && previousrollFrame === 10) {
        this._frameScore[this._currentFrameNumber - 2] = previousrollFrame + latestRollFrame + this._frames[this._currentFrameNumber][0];
      }
   }
    
    //stike change frame number
    if (this._frames[this._currentFrameNumber][0] === 10) { 
      this._currentFrameNumber += 1;
    } else if(this._frames[this._currentFrameNumber].length === 2) {
      this._currentFrameNumber += 1;
    }
  },

  getCurrentFrameNumber: function(){
    return this._currentFrameNumber;
  },

  totalScore : function() {
    this._currentScore = this._frameScore.reduce(function(a, b){return a+b;}, 0);
    this._totalScoreDisplay.push(this._currentScore)
    return this._currentScore;
  }
}
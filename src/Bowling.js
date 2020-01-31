'use strict';

class Bowling{
  constructor() {
    this._frameCounter = 1;
    this._currentRoll = 0;
    this.frames = [
      {rollOne: 0, rollTwo: 0, score: 0}
    ];
    this.totalScore = this._calculateTotalScore();
  }

  roll(){
    this._currentRoll = this._randomRoll();
  }

  updateScoreFirst() {
    this.frames[(this.currentFrame()-1)].rollOne = this._currentRoll;
    this.frames[(this.currentFrame()-1)].score = this.frames[(this.currentFrame()-1)].rollOne;
    this.totalScore = this._calculateTotalScore();
    this._currentRoll = 0;
  }

  updateScoreSecond() {
    this.frames[(this.currentFrame()-1)].rollTwo = this._currentRoll;
    this.frames[(this.currentFrame()-1)].score += this.frames[(this.currentFrame()-1)].rollTwo;
    this.totalScore = this._calculateTotalScore();
    this._currentRoll = 0;
    this._frameCounter += 1;
  }

  updateGame() {
    if(this._frameCounter > this.frames.length) {
      this._newFrame();}
  }

  currentFrame(){
    return this.frames.length
  }

  currentFrameRollOne(){
    return (this.frames[(this.currentFrame()-1)].rollOne);
  }

  currentFrameRollTwo(){
    return (this.frames[(this.currentFrame()-1)].rollTwo);
  }

  currentFrameScore(){
    return (this.frames[(this.currentFrame()-1)].score);
  }

  _calculateTotalScore() {
    var score = 0;
    for(var i = 0; i < this._frameCounter; i++) {
      score += this.frames[i].score;
    }
    return score;
  }

  _randomRoll(){
  return Math.floor(Math.random() * 11);
  }

  _newFrame() {
    this.frames.push({rollOne: 0, rollTwo: 0, score: 0});
  }
}

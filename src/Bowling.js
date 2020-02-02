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
    if(this.frames[(this.currentFrame()-1)].rollOne === 10) {
      this._frameCounter += 1;
    }
    this.frames[(this.currentFrame()-1)].score = this.frames[(this.currentFrame()-1)].rollOne;
    this._currentRoll = 0;
  }

  updateScoreSecond() {
    this.frames[(this.currentFrame()-1)].rollTwo = this._currentRoll;
    this.frames[(this.currentFrame()-1)].score += this.frames[(this.currentFrame()-1)].rollTwo;
    if(this.isStrike()) {
      this.frames[(this.currentFrame()-2)].score += this.frames[this.currentFrame()-1].score;
    }else if(this.isSpare()) {
      this.frames[(this.currentFrame()-2)].score += this.frames[(this.currentFrame()-1)].rollOne;
    }
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

  frameRollOne(frameNum){
    return (this.frames[frameNum - 1].rollOne);
  }

  currentFrameRollTwo(){
    return (this.frames[(this.currentFrame()-1)].rollTwo);
  }

  frameScore(frameNum){
    return (this.frames[frameNum - 1].score);
  }

  isStrike() {
    if(this.currentFrame() !== 1 && this.frameRollOne(this.currentFrame()-1) === 10) {
      return true
    }
  }

  isSpare() {
    if(this.currentFrame() !== 1 && this.frameScore(this.currentFrame()-1) === 10) {
      return true
    }
  }

  _calculateTotalScore() {
    var countScore = 0;
    for(var i = 0; i < this._frameCounter; i++) {
      countScore += this.frames[i].score;
    }
    return countScore;
  }

  _randomRoll(){
  return Math.floor(Math.random() * 11);
  }

  _newFrame() {
    this.frames.push({rollOne: 0, rollTwo: 0, score: 0});
  }
}

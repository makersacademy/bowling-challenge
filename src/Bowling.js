'use strict';

class Bowling{
  constructor() {
    this.frameCounter = 1;
    this._currentRoll = 0;
    this.rollNum = 1;
    this.frames = [
      {rollOne: 0, rollTwo: 0, score: 0}
    ];
    this.totalScore = this._calculateTotalScore();
  }

  roll1(){
    this._currentRoll = this._randomRoll1();
  }

  roll2(){
    this._currentRoll = this._randomRoll2();
  }

  updateScoreFirst() {
    this.frames[(this.currentFrame()-1)].rollOne = this._currentRoll;
    if(this.frames[(this.currentFrame()-1)].rollOne === 10) {
      this.frameCounter += 1;
    }
    this.frames[(this.currentFrame()-1)].score = this.frames[(this.currentFrame()-1)].rollOne;
    this._currentRoll = 0;
    this.rollNum = 2;
  }

  updateScoreSecond() {
    if(this.frames[(this.currentFrame()-1)].rollOne === 10) {
      this.rollNum = 1;
      return
    }
    this.frames[(this.currentFrame()-1)].rollTwo = this._currentRoll;
    this.frames[(this.currentFrame()-1)].score += this.frames[(this.currentFrame()-1)].rollTwo;
    if(this.isStrike()) {
      this.frames[(this.currentFrame()-2)].score += this.frames[this.currentFrame()-1].score;
    }else if(this.isSpare()) {
      this.frames[(this.currentFrame()-2)].score += this.frames[(this.currentFrame()-1)].rollOne;
    }
    this.totalScore = this._calculateTotalScore();
    this._currentRoll = 0;
    this.frameCounter += 1;
    this.rollNum = 1;
  }

  updateGame() {
    if(this.frameCounter > this.frames.length && this.currentFrame() !== 10) {
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
    for(var i = 0; i < this.frameCounter; i++) {
      countScore += this.frames[i].score;
    }
    return countScore;
  }

  _randomRoll1(){
  return Math.floor(Math.random() * 11);
  }

  _randomRoll2(){
  return Math.floor(Math.random() * (11 - this._currentRoll));
  }

  _newFrame() {
    this.frames.push({rollOne: 0, rollTwo: 0, score: 0});
  }
}

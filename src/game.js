'use strict';

class Game {
  constructor(){
    this.frames = [];
    this.frames_scores = [];
    this.MAX_FRAMES = 10;
  }

  gameFrames(){
    return this.frames;
  }

  addFrame(frame){
    if (this._gameOver()){
      return;
    }
    this.frames.push(frame);
  }

  sharingInfoWithFrames() {
    for (var i=0; i < this.frames.length-1; i++) {
      this.frames[i].getNextRoll(this.frames[i+1]);
      this.frames[i].getNextNextRoll(this.frames[i+2]);
    }
  }

  getFramesScores() {
    var frames_scores = []
    this.frames.forEach(function(frame){
      frames_scores.push(frame.totalFrameScore());
    });
    this.frames_scores = frames_scores
  }

  framesScores() {
    return this.frames_scores
  }

  finalScore() {
    var finalScore = this.framesScores().reduce(function(a, b){
    return a + b;
    }, 0);
    return finalScore
  }

  _gameOver(){
    return this.gameFrames().length === this.MAX_FRAMES;
  }
}

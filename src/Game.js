'use strict';

class Game {

  constructor(){
    this.frameScores = [];
    this.frames = [];
  }

  updateFramesArray(frame){
    this.frames.push(frame);
  }

  updateFrameScores(frameScore){
    this.frameScores.push(frameScore);
  }

}
'use strict';

class Game {

  constructor(){
    this.frames = []
  }

  calculateCurrentScore(){
    return 0
  }

  addFrame(frame){
    this.frames.push(frame)
  }

  addLastFrame(frame){
    this.frames.push(frame)
  }

}

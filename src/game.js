'use strict';

class Game {

  constructor(){
    this.frames = []
  }

  calculateCurrentScore(){
    var total = 0

    this.frames.forEach(function(frame){
      total += frame[0] + frame[1]
    });

    return total
  }

  addFrame(frame){
    this.frames.push(frame)
  }

  addLastFrame(frame){
    this.frames.push(frame)
  }

}

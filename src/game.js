'use strict';

class Game {

  constructor() {
    this.totalScore = 0;
    this.frames = [];
  }

  addFrame(frame){
    this.frames.push(frame)
  }

  addLastFrame(frame){
    this.frames.push(frame)
  }

  calculateTotalScore() {
    var total = 0

    this.frames.forEach(function (value, index, array) {
      total += value.reduce(function(a, b){
        return a + b;
      }, 0);
    });

    this.totalScore = total
  }

}

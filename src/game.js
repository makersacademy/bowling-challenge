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

      if (index !== 9){
        if (value[0] + value[1] === 10) {
          total += value[0] + value[1] + array[index + 1][0]
        } else {
          total += value[0] + value[1]
        }

      } else {
        if (value[0] + value[1] === 10) {
          total += value[0] + value[1] + value[2]
        } else {
          total += value[0] + value[1]
        }
      }

    });

    this.totalScore = total
    return total
  }

}

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

      var merged = [].concat.apply([], array);

        if (value[0] + value[1] === 10) {
          total += merged[index] + merged[index + 1] + merged[index + 2]
        } else {
          total += merged[index] + merged[index + 1]
        }

    });

    this.totalScore = total
    return total
  }

}

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

      if (value[0] === 10) {

        if (index !== 8 && index !== 9) {
          if (array[index + 1][0] === 10) {
            total += value[0] + array[index + 1][0] + array[index + 2][0];
          } else {
            total += value[0] + array[index + 1][0] + array[index + 1][1];
          }

        } else if (index === 8){
          total += value[0] + array[index + 1][0] + array[index + 1][1];

        } else {
          total += value[0] + value[1] + value[2];
        }


      } else if (value[0] + value[1] === 10) {
        total += merged[(index * 2)] + merged[(index * 2) + 1] + merged[(index * 2) + 2]


      } else {
        total += merged[(index * 2)] + merged[(index * 2) + 1]
      }


    });

    this.totalScore = total
    return total
  }

}

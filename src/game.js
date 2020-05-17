'use strict';

class Game {

  constructor() {
    this.totalScore = 0;
    this.frames = [];
  }

  addFrame(frame){
    // frame = new Frame(frame);
    this.frames.push(frame)
  }

  addLastFrame(frame){
    this.frames.push(frame)
  }


  calculateCurrentScore() {
    var total = 0

    this.frames.forEach(function (value, index, array) {

      if (isStrike(value)) {

        // 8 and 9 to 0 and 1
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


      } else if (isSpare(value)) {

        if (index !== 9){
          total += value[0] + value[1] + array[index + 1][0]
        } else {
          total += value[0] + value[1] + value[2]
        }


      } else {
        total += value[0] + value[1];
      }
    });

    this.totalScore = total
    return total
  }
}

function isStrike(value){
  return value[0] === 10;
};

function isSpare(value){
  return value[0] + value[1] === 10 && value[0] !== 10;
};

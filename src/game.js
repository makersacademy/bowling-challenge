'use strict';

class Game {

  constructor(){
    this.frames = []
  }

  addFrame(frame){
    this.frames.push(frame)
  }

  calculateCurrentScore(){
    var total = 0

    this.frames.forEach(function(frame, index, array){

        // last frame
        if (frame.length === 3){
          total += frame[0] + frame[1] + frame[2]

        // if game hasn't finished yet
        } else if (array.length !== 10 && index === array.length - 1 && isSpare(frame)){
          total = total
        } else if (array.length !== 10 && index === array.length - 1 && isStrike(frame)) {
          total = total
        } else if (array.length !== 10 && index === array.length - 2 && isStrike(frame) && isStrike(array[index + 1])) {
          total = total

        } else if (isStrike(frame) && isStrike(array[index + 1]) && index < 8) {
          total += frame[0] + array[index + 1][0] + array[index + 2][0]
        } else if (isStrike(frame)) {
          total += frame[0] + array[index + 1][0] + array[index + 1][1]

        } else if (isSpare(frame)){
          total += frame[0] + frame[1] + array[index + 1][0]
        } else {
          total += frame[0] + frame[1]
        }
    });

    return total
  }
}

function isSpare(frame){
  return frame[0] + frame[1] === 10 && frame[0] !== 10
}

function isStrike(frame){
  return frame[0] === 10
}

'use strict';

class Game {

  constructor(){
    this.frames = []
  }

  calculateCurrentScore(){
    var total = 0

    this.frames.forEach(function(frame, index, array){

      // if game has ended
      if (array.length === 10) {

        // last frame
        if (frame.length === 3){
          total += frame[0] + frame[1] + frame[2]

        } else if (isStrike(frame) && isStrike(array[index + 1]) && index < 8) {
          total += frame[0] + array[index + 1][0] + array[index + 2][0]
        } else if (isStrike(frame)) {
          total += frame[0] + array[index + 1][0] + array[index + 1][1]

        } else if (isSpare(frame)){
          total += frame[0] + frame[1] + array[index + 1][0]
        } else {
          total += frame[0] + frame[1]
        }

        // if game hasn't finished yet
      } else {

        if (index === array.length - 1 && isSpare(frame)){
          total = total


        } else if (index === array.length - 1 && isStrike(frame)) {
          total = total
        } else if (index === array.length - 2 && isStrike(frame) && isStrike(array[index + 1])) {
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

      }

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


function isSpare(frame){
  return frame[0] + frame[1] === 10 && frame[0] !== 10
}

function isStrike(frame){
  return frame[0] === 10
}

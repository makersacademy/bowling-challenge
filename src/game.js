'use strict';

class Game {

  constructor(){
    this.frames = []
  }

  calculateCurrentScore(){
    var total = 0

    this.frames.reverse().forEach(function(frame, index, array){

      if (array.length === 10) {
        // last frame
        if (frame.length === 3){
          total += frame[0] + frame[1] + frame[2]
          // spare
        } else if (frame[0] + frame[1] === 10){
          total += frame[0] + frame[1] + array[index - 1][0]
        } else {
          total += frame[0] + frame[1]
        }

      } else {

        if (frame[0] + frame[1] === 10 && index === 0){
          total = total
        } else if (frame[0] + frame[1] === 10){
          total += frame[0] + frame[1] + array[index - 1][0]
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

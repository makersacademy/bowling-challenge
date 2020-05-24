'use strict';

class Game {
  constructor(){
    this.frames = []
  }

  addFrame(frame){
    if (this.frames.length <= 9) { this.frames.push(new Frame(frame)) }
  }

  calculateCurrentScore(){
    var total = 0

    this.frames.forEach(function(frame, index, array){

        if (frame.rolls.length === 3){
          total += frame.rolls[0] + frame.rolls[1] + frame.rolls[2]

        } else if (isGameUnfinished(array) && index === array.length - 1 && frame.isSpare()){
          total = total
        } else if (isGameUnfinished(array) && index === array.length - 1 && frame.isStrike()) {
          total = total
        } else if (isGameUnfinished(array) && index === array.length - 2 && frame.isStrike() && (array[index + 1]).isStrike()) {
          total = total

        } else if (frame.isStrike() && (array[index + 1]).isStrike() && index < 8) {
          total += frame.rolls[0] + array[index + 1].rolls[0] + array[index + 2].rolls[0]
        } else if (frame.isStrike()) {
          total += frame.rolls[0] + array[index + 1].rolls[0] + array[index + 1].rolls[1]

        } else if (frame.isSpare()){
          total += frame.rolls[0] + frame.rolls[1] + array[index + 1].rolls[0]
        } else {
          total += frame.rolls[0] + frame.rolls[1]
        }
    });

    return total
  }
}

function isGameUnfinished(array){
  return array.length !== 10
}

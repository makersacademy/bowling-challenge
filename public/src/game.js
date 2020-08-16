"use strict";

class Game {
  constructor() {
    this.frames = [];
  }

  add(frame) {
    if (this.frames.length == 10) {
      return ("10 frames per game max");
    }
    this.frames.push(frame);
  }
  
  getTotalPoints() {
    var points = 0, frameArr = this.frames;

    frameArr.forEach(function(frame, index) {

      if (frame.isStrike() && frameArr[index+1]) {
        if (frameArr[index+1]._rolls.length === 1) {
          points += frameArr[index+2]._rolls[0];
        }
        points += frameArr[index+1].strikeBonus();
      } else if (frame.isSpare() && frameArr[index+1]) {
        points += frameArr[index+1]._rolls[0];
      }
      points += frame.points();
    });
    return points;
  }
}

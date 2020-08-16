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

  totalPoints() {
    var points = 0, frameArr = this.frames;

    frameArr.forEach(function(frame, index) {

      if (frame.isStrike()) {
        points += frame.strikeBonus(frameArr[index+1], frameArr[index+2]);
      } else if (frame.isSpare()) {
        points += frame.spareBonus(frameArr[index+1]);
      }
      points += frame.points();
    });
    return points;
  }
}

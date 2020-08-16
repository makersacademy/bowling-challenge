"use strict";

class Game {
  constructor() {
    this.frames = [];
  }

  add(frame) {
    this.frames.push(frame);
  }

  totalPoints() {
    var points = 0, frameArr = this.frames;
    frameArr.forEach(function(frame, index) {
      points += frame.points();
      points += frame.bonusPoints(frameArr[index+1], frameArr[index+2]);
    });
    return points;
  }
}

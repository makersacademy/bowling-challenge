"use strict";

class Game {
  constructor() {
    this._frames = [];
  }

  add(frame) {
    this._frames.push(frame);
  }

  totalPoints() {
    var points = 0, frameArr = this._frames;
    frameArr.forEach(function(frame, index) {
      points += frame.points();
      points += frame.bonusPoints(frameArr[index+1], frameArr[index+2]);
    });
    return points;
  }
}

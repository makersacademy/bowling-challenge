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
    var points = 0;
    this.frames.forEach(sum);
    function sum(frame) {
      points += frame.getBasePoints();
    }
    return points;
  }
}

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

  getPoints() {
    var points = 0;
    this.frames[0]._rolls.forEach(sum);
    function sum(rollScore) {
      points += rollScore;
    }
    return points;
  }
}

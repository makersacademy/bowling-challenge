"use strict";

class Game {

  constructor() {
    this.totalScore = 0;
    this.frameNumber = 1;
  }

  enterScore(score) {
    this.totalScore += score;
  }
}

Game

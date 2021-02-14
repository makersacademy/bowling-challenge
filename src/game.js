"use strict";

class Game {

  constructor() {
    this.totalScore = 0;
    this.frameNumber = 1;
    this.bowlNumber = 1;
  }

  enterScore(score) {
    this.totalScore += score;
    if(score === 10) {
      this.frameNumber ++
    }
    this.bowlNumber += 1;
  }
}

Game

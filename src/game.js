'use strict';

class Game {
  constructor(){
    this.currentScore = 0;
  }

  roll(pins){
    this.currentScore += pins;
  }

  score() {
    return this.currentScore;
  }
}

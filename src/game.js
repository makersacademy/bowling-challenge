'use strict';

class Game{
  constructor() {
    this.score = 0
  }

  hit() {
    return this.score += 1;
  }

}
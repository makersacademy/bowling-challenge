'use strict';

class Game {
  constructor() {
    this.frame = null;
    this.turn = 0;
    this.scorecard = [];
    this.MAXIMUM_FRAME = 10;
  }

  beginFrame() {
    if(this.turn >= this.MAXIMUM_FRAME) {
      return this.finishGame();
    } 
    this.turn += 1;
    this.frame = new Frame(this.turn);
    return `Frame ${this.turn}`;
  }

  throwBall(points) {
    return this.frame.addRoll(points);
  }

  addToScorecard() {
    this.scorecard.push(this.frame.score);
    return this.scorecard;
  }

  strikeBonus() {
    if(this.isLastFrame()) {
      return null;
    }
    if(this.scorecard[this.scorecard.length -2] === [10] || [0, 10]) {
      let strikeBonus = this.scorecard[this.scorecard.length - 1];
      this.scorecard[this.scorecard.length - 2] = this.scorecard[this.scorecard.length - 2].concat(strikeBonus);
    }
  }

  spareBonus() {
    if(this.isLastFrame()) {
      return null;
    }
    if(this.scorecard[this.scorecard.length -2] === [10] || [0, 10]) {
      let spareBonus = this.scorecard[this.scorecard.length - 1][0];
      this.scorecard[this.scorecard.length - 2] = this.scorecard[this.scorecard.length - 2].concat(spareBonus);
    }
  }

  isLastFrame() {
    if(this.turn > this.MAXIMUM_FRAME) {
      return true;
    }
  }

  totalPoints() {
    var sum = []
    for(var i = 1; i < this.scorecard.length; i++){
      sum = sum.concat(this.scorecard[i]);
  }
    return sum.reduce((a, b) => a + b )
  }

  finishGame() {
    return `end of game, you score ${this.totalPoints()}`;
  }

}
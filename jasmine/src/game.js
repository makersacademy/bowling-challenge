'use strict';

class Game {
  constructor(runningScore, bowlCard, scoreCard, index) {
    this.runningScore = 0;
    this.bowlCard = [];
    this.scoreCard = [];
    this.index = -1;
  }

roll(bowl1, bowl2 = 0) {
  this.index += 1;
  this.bowlCard.push([bowl1, bowl2]);
  this.runningScore += (bowl1 + bowl2);
  this.scoreCard.push(bowl1 + bowl2);
  return bowl1 + bowl2;
}

calculateSparePoints() {
  let sparePoints = this.bowlCard[this.index][0];
  if (this.scoreCard[this.index-1] === 10 && this.bowlCard[this.index-1][0] !== 10) {
    this.scoreCard[this.index-1] += sparePoints;
    this.runningScore += sparePoints;
  }
}

calculateStrikePoints() {
  let strikePoints = this.scoreCard[this.index];
  if (this.bowlCard[this.index-1][0] === 10) {
    this.scoreCard[this.index-1] += strikePoints;
    this.runningScore += strikePoints;
  } 
}
}

let game = new Game();

console.log(game.roll(3, 4));
console.log(game.roll(5, 5));
console.log(game.roll(3, 4));
console.log(game.calculateSparePoints());


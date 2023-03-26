/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
class Scorecard {
  constructor(game) {
    this.game = game;
  }

  frames() {
    const frameNums = Array.from({ length: 10 }, (_, i) => i + 1);
    return frameNums.map((x) => x.toString().padStart(5)).join('|');
  }

  rolls() {
    const theRolls = [];
    this.game.frames.map((x) => theRolls.push(x.first_roll, x.second_roll));
    const eachSpace = Array(20).fill(' ');
    const eachPin = theRolls.concat(eachSpace);
    eachPin.length = 20;
    return eachPin.map((x) => x.toString().padStart(2)).join('|');
  }

  scores() {
    const theScores = [];
    this.game.frames.map((x) => theScores.push(x.score));
    const eachSpace = Array(10).fill(' ');
    const eachPin = theScores.concat(eachSpace);
    eachPin.length = 10;
    return eachPin.map((x) => x.toString().padStart(5)).join('|');
  }

  card() {
    console.log(`${'\n FRAMES:'.padStart(8)} ${this.frames()}`);
    console.log(`${'ROLLS:'.padStart(8)} ${this.rolls()}`);
    console.log(`${'SCORES:'.padStart(8)} ${this.scores()} \n`);
  }
}

module.exports = Scorecard;

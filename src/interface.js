const rlSync = require('readline-sync');
const Game = require('./game');
const Scorecard = require('./scorecard');

const game = new Game();
const scorecard = new Scorecard(game);

const readlineQ = (text) => {
  const str = Number(rlSync.question(text));
  return str;
};

for (let i = 0; i < 9; i += 1) {
  const rollOne = readlineQ('First roll\n');
  const rollTwo = rollOne === 10 ? 'x' : readlineQ('Second roll\n');
  game.roll(rollOne, rollTwo);
  scorecard.card();
}
const rollOne = readlineQ('First roll\n');
const rollTwo = readlineQ('Second roll\n');
game.finalRoll(rollOne, rollTwo);
scorecard.card();
if (rollOne === 10 || rollOne + rollTwo === 10) {
  const finalRoll = readlineQ('Final roll\n');
  game.bonusRoll(finalRoll);
}

console.log(`Total Score =  ${game.fetchScore()}`);

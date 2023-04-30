const Scorecard = require('./scorecard');

console.log('An empty scorecard:');
const scorecard = new Scorecard();
console.log(`Total score: ${scorecard.calculateScore()}\n`);

console.log('The score after one frame:');
const scorecard2 = new Scorecard();
scorecard2.addFrame(1, 4);
console.log(`Total score: ${scorecard2.calculateScore()}\n`);


console.log('A full game of ten frames');
const scorecard3 = new Scorecard();
scorecard3.addFrame(1, 4);
scorecard3.addFrame(4, 5);
scorecard3.addFrame(6, 4);
scorecard3.addFrame(5, 5);
scorecard3.addFrame(10);
scorecard3.addFrame(0, 1);
scorecard3.addFrame(7, 3);
scorecard3.addFrame(6, 4);
scorecard3.addFrame(10);
scorecard3.addFrame(2, 8, 6);
console.log(`Total score: ${scorecard3.calculateScore()}\n`);

console.log('A perfect game - 12 strikes!');
const scorecard4 = new Scorecard();
for (i = 0; i < 9; i++) {
  scorecard4.addFrame(10);
}
scorecard4.addFrame(10, 10, 10);
console.log(`Total score: ${scorecard4.calculateScore()}`);
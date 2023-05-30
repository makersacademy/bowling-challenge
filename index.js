const Scorecard = require('./scorecard');

const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(5, 5);
    scorecard.addFrame(1, 2);
console.log(scorecard.getFrameArray());

console.log(scorecard.totalScores());
var lodash = require('lodash');
const prompt = require("prompt-sync")({ sigint: true });

class Scorecard {

constructor() {
  this.currentGame = []
  this.finishedGame = []
}

addRoll(num) {
  if (this.currentGame.length === 20) {
    this.sortIntoFrames();
  } else if (this.currentGame.length < 20 ) {
    this.currentGame.push(num);
}
  // do {
  // const score = prompt(`Enter your score:`);
  // this.currentGame.push(score)
  // }
  // while (this.currentGame.length < 20)
}

finalScore() {
  let sum = lodash.sum(this.currentGame);
  // let sum = this.frames.reduce((a, b) => a + b, 0)
  let finalScoreCard = 0
  return finalScoreCard += sum
  // this.frames.forEach(scoring(frame, index) {

  // })
}

sortIntoFrames() {
  const chunkSize = 2;
  for (let i = 0; i < this.currentGame.length; i += chunkSize) {
    const chunk = this.currentGame.slice(i, i + chunkSize);
    this.finishedGame.push(chunk)
  }
  return this.finishedGame;
}

scoring() {
  finalScoreCard += frame
}

}

module.exports = Scorecard;
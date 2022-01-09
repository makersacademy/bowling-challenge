const readline = require('readline');
const Rules = require('../lib/rules');
const Score = require('../lib/score.js');
const Scorecard = require('../lib/scorecard.js');

class Cli {
  constructor(RulesClass = Rules, ScoreClass = Score, ScorecardClass = Scorecard) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.rulesClassInstance = new RulesClass();
    this.scorecardClassInstance = new ScorecardClass();
    this.ScoreClass = ScoreClass;
  }
  getRoll = (query = 'Input roll: ') => {
    return new Promise((resolve) => this.rl.question(query, (answer) => {
      resolve(answer);
    }));
  };

  play = async () => {
    while (this.#arrayLengthLessMaxFrames()) {
      const result = await this.getRoll();
      this.scorecardClassInstance.addRoll(parseInt(result));
    }
    this.rl.close();
    const score = new this.ScoreClass(this.scorecardClassInstance);
    console.log(`Your score: ${score.calculateScore()}`);
  };

  #arrayLengthLessMaxFrames = () => {
    this.scorecardClassInstance.framesArray.length < this.rulesClassInstance.maxFrames;
  };
}
const cli = new Cli();
cli.play();

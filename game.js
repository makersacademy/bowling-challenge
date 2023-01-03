class Game {

  constructor() {
    this.frames = [];
    this.scorecard = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    this.scorecard.push(frame.score());
  }

  strikeBonusScorecardUpdate() {
    this.frames.forEach((x, i) => {
      if(x.strike() && i < (this.frames.length - 2) && this.frames[i+1].strike() === true) {
        this.scorecard[i] = (this.frames[i].score() + this.frames[i+1].rolls[0] + this.frames[i+2].rolls[0]);
      }
      else if (x.strike() && i < (this.frames.length - 1)) {
        this.scorecard[i] = (this.frames[i].score() + this.frames[i+1].rolls[0] + this.frames[i+1].rolls[1]);
        } 
    })
  }

  spareBonusScorecardUpdate() {
    this.frames.forEach((x, i) => {
      if (x.spare() && i < (this.frames.length - 1)) {
        this.scorecard[i] = (this.frames[i].score() + this.frames[i+1].rolls[0]);
      }
    })
  }

  updateScorecard() {
    this.strikeBonusScorecardUpdate();
    this.spareBonusScorecardUpdate();
    return this.scorecard;
  }

  updateScore() {
    let currentScore = 0;
    this.scorecard.forEach(x => currentScore += x);
    return currentScore;
  }
}


module.exports = Game;


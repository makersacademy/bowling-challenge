const Scorecard = require("./scorecard");

class Game {
  constructor(scorecard = new Scorecard()) {
    this.scorecard = scorecard;
    this.bowlsLeft = 20; // Set to the maximum number of bowls
    this.currentBowl = null;
    this.previousBowl = null;
    this.bonusRound = false;
  }

  getScore = () => this.scorecard.score();

  getBoard = () => this.scorecard.board();

  rollBowl = (pinsHit = null) => {
    if (typeof pinsHit != "number")
      return "Invalid input: please choose a number between 0 and 10.";
    if (this.bowlsLeft <= 0) return "You can't roll any more bowls.";
    this.resolveBowl(pinsHit);
    return `Successful roll! You hit ${pinsHit} pins.`;
  };

  resolveBowl = (pinsHit) => {
    this.setBowls(pinsHit);
    if (this.checkSpareBonus() || this.checkStrikeBonus()) {
      this.bonusRound = true;
    } else {
      this.decreaseBowlsLeft(pinsHit);
    }
    this.scorecard.addBowl(pinsHit);
  };

  decreaseBowlsLeft = (pinsHit) => {
    if (pinsHit < 10) this.bowlsLeft -= 1;
    if (pinsHit == 10 && this.bonusRound == false) this.bowlsLeft -= 2;
    if (pinsHit == 10 && this.bonusRound == true) this.bowlsLeft -= 1;
  };

  setBowls = (pinsHit) => {
    this.previousBowl = this.currentBowl;
    this.currentBowl = pinsHit;
  };

  checkSpareBonus = () => {
    if (
      this.bowlsLeft == 1 &&
      this.bonusRound == false &&
      this.previousBowl + this.currentBowl == 10
    )
      return true;
  };

  checkStrikeBonus = () => {
    if (
      this.bowlsLeft == 2 &&
      this.bonusRound == false &&
      this.currentBowl == 10
    )
      return true;
  };
}

module.exports = Game;

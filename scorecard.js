class Scorecard {
  constructor() {
    this.currentFrame = 1;
    this.rollsMadeThisFrame = 0;
    this.pinsRemaining = 10;
    this.activeBonusLifetimes = [];
    this.historyLog = [];
  }
}

module.exports = Scorecard;

class Bowling {
  constructor() {
    this.gameArray = [];
    this.roundArray = [];
    this.roundCounter = 1;
    this.firstBowl= null;
    this.secondBowl = null;
  }
  addFirstBowl(pins) {
    this.firstBowl = pins;
    this.roundArray.push(this.firstBowl)
    if (this.firstBowl === 10) { this.finishRound(); }
  }
  addSecondBowl(pins) {
    this.secondBowl = pins;
    this.roundArray.push(this.secondBowl);
    this.finishRound();
  }
  finishRound() {
    this.gameArray.push(this.roundArray);
    this.firstBowl = null;
    this.secondBowl = null;
    this.roundArray = [];
    this.roundCounter++;
  }
  isStrike(round) {
    let roundIndex = round - 1;
    return this.gameArray[roundIndex][0] === 10 ? true : false;
  }
  isSpare(round) {
    let roundIndex = round - 1;
    if (this.isStrike(round)) { return false };
    if (this.gameArray[roundIndex][0] + this.gameArray[roundIndex][1] === 10) {
      return true;
    }
    else {
      return false;
    }
  }
  calculateRoundScore(round) {
    let roundIndex = round - 1
    if (this.gameArray.length < round) { return null };
    if (this.isStrike(round)) {
      if (this.gameArray.length < round + 1) { return null };
      if (this.isStrike(round + 1) && this.gameArray.length < round + 2) {return null};
      if (this.isStrike(round + 1)) {
        return this.gameArray[roundIndex][0] + this.gameArray[round][0] + this.gameArray[round + 1][0];
      } else {
        return this.gameArray[roundIndex][0] + this.calculateFrameSum(round);
      }
    }
    if (this.isSpare(round)) {
      if (this.gameArray.length >= round + 1) {
        return this.calculateFrameSum(roundIndex) + this.gameArray[round][0];
      } else if (!this.firstBowl.isNull) {
        return this.calculateFrameSum(roundIndex) + this.firstBowl;
      } else {
        return null;
      }
    } else {
      return this.calculateFrameSum(roundIndex);
    }
  }
  calculateFrameSum(roundIndex) {
    return this.gameArray[roundIndex][0] + this.gameArray[roundIndex][1];
  }
  calculateTotalScore() {
    let score = 0;
    for (let i = 1; i <= this.roundCounter; i++) {
      if (i > 10) { break };
      score += this.calculateRoundScore(i);
    }
    return score;
  }
  endGame() {
    return `You have finished your game! Your final score was: ${this.calculateTotalScore()}`;
  }
}



module.exports = Bowling;
class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  _isSpare(frameScore) {
    return frameScore === 10;
  }

  _isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  _strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex+1] + this.rolls[rollIndex+2];
  }

  _spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex+2];
  }

  get score() {                            
    let gameScore = 0, rollIndex = 0;
    for (let frame = 0; frame < 10; frame++) {    // Iterate over every frame
      if (this._isStrike(rollIndex)) {             // check for strike
        gameScore += this._strikeBonus(rollIndex)  // calculate score for strike
        rollIndex++;
        continue;                                 // move to next frame
      }
      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex+1];  // if not a strike, calculate frame score

      if (this._isSpare(frameScore)) {             // if the frame score indicates a strike
        gameScore += this._spareBonus(rollIndex)   // calculate score for spare
      } else {
        gameScore += frameScore;                  // if not a strike, add frame score to game score
      }
      rollIndex += 2;
    } 
    return gameScore;
  }
}

module.exports = Bowling;
class Score {

constructor() {
    this._game = typeof game !== 'undefined' ? game : new Bowling();
}

  score() {
    var indexOfRoll = 0
    var totalScore = 0
    for(var turn = 0; turn < 10; turn++){
        if(this._game.isStrike(indexOfRoll)) {
        totalScore += (10 + this._game.nextRollsAfterStrike(indexOfRoll))
        indexOfRoll += 1
        this._game.numberOfTurns++
        } else if(this._game.isSpare(indexOfRoll)) {
        totalScore += (10 + this._game.nextRollsAfterSpare(indexOfRoll))
        indexOfRoll += 2
        } else {
        totalScore += this._game.allRollsSum(indexOfRoll)
        indexOfRoll += 2
        }
    }
      return totalScore;
  };
}
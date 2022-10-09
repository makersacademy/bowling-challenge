class BowlingScorecard{
  constructor(scoreboard){
    this._scoreboard = scoreboard;
    this._score = 0;
  }

  getScore() {
    return this._score;
  }

  calculateScore() {
    this.calculateScoreFromPinsDown();
    this.calculateBonuses();
  }

  // score from pins down
  calculateScoreFromPinsDown() {
    this._score += (this._scoreboard.flat().reduce((sum, pins) => sum + pins));
  }
  
  // score from bonuses
  calculateBonuses(){
    const arrayLength = this._scoreboard.length < 9 ? this._scoreboard.length : 9
    for (let i = 0; i < arrayLength; i++ ) {
      //bonuses from strikes
      if (this._scoreboard[i].length === 1) {
        const nextFrameScore = this._scoreboard[i+1][0] + this._scoreboard[i+1][1];
        this._score += nextFrameScore;
      
      //bonuses from spares
      } else if (this._scoreboard[i].length === 2 && this._scoreboard[i][0] + this._scoreboard[i][1] === 10) {
        const nextThrowScore = this._scoreboard[i+1][0];
        this._score += nextThrowScore;
      }
    }
  }
}

module.exports = BowlingScorecard;
class Game {

  constructor() {
    this.scoring = new Scoring();
    this.bonusRollsComplete = false
    this.bonusRollsCounter = 0
  }
  
  gamePlay(rollOne, rollTwo) {
    this.addNewFrameRolls(rollOne, rollTwo)
    if (this.scoring.frameCounter === 10) {
      this.bonusRollsAwarded = this._calculateBonusRolls()
      // this._bonusRollsGameplay()
    }
  }

  // _bonusRollsGameplay(rollOne,rollTwo) {
  //   score for final go + bonus rolls will be 10 + bonus roll 1 + (bonus roll 2 if awarded with 2)
  // }

  addNewFrameRolls(rollOne, rollTwo) {
    const frame = this._convertToDict(rollOne,rollTwo)
    this.scoring.updateCurrentFrame(frame)
    this.scoring.runningScore()
  }


  _isGameComplete() {
    return (this.scoring.frameCounter === 10 && this.bonusRollsComplete)
  }

  _calculateBonusRolls() {
    if (
      this.scoring.frameCounter === 10 &&
      this.scoring.strikeCounter === 0 &&
      this.scoring.spareCounter === 0
    ) {
      return 0
    } else if (
      this.scoring.frameCounter === 10 &&
      this.scoring.strikeCounter >= 1
    ) {
      return 2
    } else if (
      this.scoring.frameCounter === 10 &&
      this.scoring.spareCounter === 1
    ) {
      return 1
    }
  }

  _convertToDict = (a, b) => {
    return {1:parseInt(a),2:parseInt(b)}
  }
}


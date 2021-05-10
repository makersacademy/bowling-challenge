class Scorecard {
  constructor(){
    this.scoreData = []
    let counter = 1
    for (let i = 1; i <= 10; i++) {
      let frame = {
        frameNumber: counter,
        firstRollScore: 0,
        secondRollScore: 0,
        totalFrameScore: 0,
        totalScore: 0,
        isStrike: false,
        isSpare: false,
      }
      counter ++
      this.scoreData.push(frame)
    }
    this.runningTotal = 0
    this.currentFrameNumber = 1
    this.currentRoll = 1
    this.gameOver = false
  };

  addScore(score){
    if (this.currentFrameNumber === 10){
      this._lastRound(score)
      return
    }
    if (this._isCurrentRoleFirst()){
      this._updateFirstRollScore(score)
      if(this._isStrike(score)){
        this._strike(score)
        return
      }
      this._switchRolls()
    } else if (this._isCurrentRoleSecond()) {
      this._updateSecondRollScore(score)
      this._switchRolls()
      this._updateFrameNumber() 
    }
    this._spare(score)
  };

  _updateFrameNumber(){
    this.currentFrameNumber ++
  };

  _switchRolls(){
    if(this._isCurrentRoleFirst()) {
      this.currentRoll = 2
    } else {
      this.currentRoll  = 1
    }
  }
  _updateFirstRollScore(score) {
    this._updateStrikeBonus(score)
    this._updateSpareBonus(score)
    this.scoreData[(this.currentFrameNumber - 1)].firstRollScore += score
    this._updateTotalScore(score)
  }
  _updateSecondRollScore(score){
    this._updateStrikeBonus(score)
    this.scoreData[(this.currentFrameNumber - 1)].secondRollScore += score
    this._updateTotalScore(score)
  }
  _strike(score){
    this.scoreData[(this.currentFrameNumber - 1)].isStrike = true
    this._updateFrameNumber()
  }

  _isStrike(score){
    return score === 10
  }

  _updateStrikeBonus(score){
    if(this.currentFrameNumber > 1){
      if(this.scoreData[(this.currentFrameNumber - 2)].isStrike === true){
        this.scoreData[(this.currentFrameNumber - 2)].totalFrameScore += score
        this.scoreData[(this.currentFrameNumber - 2 )].totalScore += score
        this.runningTotal += score
      }
    }
  }

  _spare(score){
    if (
      this.currentFrameNumber > 1 && 
      this.scoreData[this.currentFrameNumber - 2].totalFrameScore === 10
    ){
      this.scoreData[this.currentFrameNumber - 2].isSpare = true
    }  
  }

  _updateSpareBonus(score){
    if(this.currentFrameNumber > 1){
      if(this.scoreData[(this.currentFrameNumber - 2)].isSpare === true){
        this.scoreData[(this.currentFrameNumber - 2)].totalFrameScore += score
        this.scoreData[(this.currentFrameNumber - 2)].totalScore += score
        this.runningTotal += score
      }
    }
  }

  _updateTotalScore(score){
    this.scoreData[(this.currentFrameNumber - 1)].totalFrameScore += score
    this.runningTotal += score
    this.scoreData[(this.currentFrameNumber - 1)].totalScore = this.runningTotal
  }

  _lastRound(score){
    if (this.gameOver){
      return "Game Over!"
    }
    if (this._isCurrentRoleFirst()){
      this._updateFirstRollScore(score)
      this._switchRolls()
    } else if (this._isCurrentRoleSecond()){
      this._updateSecondRollScore(score)
      if (this._isStrike(score)) {
        this.scoreData[9].isStrike = true
        this.currentRoll = 3
      } else if (this.scoreData[9].firstRollScore + score === 10){
        this.scoreData[9].isSpare = true
        this.currentRoll = 3
      } else {
        this._gameOver()
      }
    } else if(this._isCurrentRoleThird()) {
      this._updateThirdRollScore(score)
      this._gameOver()
    }
  }

  _isCurrentRoleFirst(){
    return this.currentRoll === 1
  }
  
  _isCurrentRoleSecond(){
    return this.currentRoll === 2
  }
  
  _isCurrentRoleThird(){
    return this.currentRoll === 3
  }

  _updateThirdRollScore(score){
    this.scoreData[9].thirdRollScore = score
    this.scoreData[9].totalScore += score
    this.scoreData[9].totalFrameScore += score
  }

  _gameOver(){
    this.gameOver = true
  }
};
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
        spare: false,
      }
      counter ++
      this.scoreData.push(frame)
    }

    this.runningTotal = 0
    this.currentFrameNumber = 1
    this.currentRoll = 1
  };

  addScore(score){
    if (this.currentRoll === 1){
      this._updateFirstRollScore(score)
      if(this.isStrike(score)){
        this._strike(score)
        return
      }
      this._switchRolls()
    } else if (this.currentRoll === 2) {
      this._updateSecondRollScore(score)
      this._switchRolls()
      this._updateFrameNumber()
    }
  };

  _updateFrameNumber(){
    this.currentFrameNumber ++
  };

  _switchRolls(){
    if(this.currentRoll === 1) {
      this.currentRoll ++
    } else {
      this.currentRoll = (this.currentRoll - 1)
    }
  }

  _updateFirstRollScore(score) {
    if(this.currentFrameNumber > 1){
      if(this.scoreData[(this.currentFrameNumber - 2)].isStrike === true){
        this.scoreData[(this.currentFrameNumber - 2)].totalFrameScore += score
        this.scoreData[(this.currentFrameNumber - 2 )].totalScore += score
        this.runningTotal += score
      }
    }
    this.scoreData[(this.currentFrameNumber - 1)].firstRollScore += score
    this.scoreData[(this.currentFrameNumber - 1)].totalFrameScore += score
    this.runningTotal += score
    this.scoreData[(this.currentFrameNumber - 1)].totalScore = this.runningTotal
  }

  _updateSecondRollScore(score){

    if(this.currentFrameNumber > 1){
      if(this.scoreData[(this.currentFrameNumber - 2)].isStrike === true){
        this.scoreData[(this.currentFrameNumber - 2)].totalFrameScore += score
        this.scoreData[(this.currentFrameNumber - 2 )].totalScore += score
        this.runningTotal += score
      }
    }
    this.scoreData[(this.currentFrameNumber - 1)].secondRollScore += score
    this.scoreData[(this.currentFrameNumber - 1)].totalFrameScore += score
    this.runningTotal += score
    this.scoreData[(this.currentFrameNumber - 1)].totalScore = this.runningTotal
  }

  _strike(score){
    this.scoreData[(this.currentFrameNumber - 1)].isStrike = true
    this._updateFrameNumber()
  }

  isStrike(score){
    return score === 10
  }
};

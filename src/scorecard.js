class Scorecard {
  constructor() {
    this._scorecard = {1: [], 
      2: [], 
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      }
      this._totalScore = 0
  }

  currentScorecard() {
    return this._scorecard
  }

  getFrame(frame) {
    return this._scorecard[frame]
  }

  getFrameScore(frame) {
    let arr = this._scorecard[frame]
    let sum = 0
    for(var i in arr) { sum += arr[i]}
    return sum
  }

  addToScorecard(frame, score) {
    this.addScore(score)
    if(frame === 'Bonus') {
      this._scorecard['Bonus'] = score
    } else {
      this._scorecard[frame].push(score)
    }
  }

  spare(frame) {
    let previousFrame = frame - 1
    let total = this.getFrameScore(previousFrame)
    if(frame === 1) {
      return false
    } else if((total === 10) && (this._scorecard[previousFrame].length === 2)) {
      return true
    } else {
      return false
    }
    
  }

  strike(frame) {
    let previousFrame = (frame - 1)
    if (frame === 1) {
      return false
    } else if(this._scorecard[previousFrame][0] === 10) {
      return true
    } else {
      return false
  }
}

addScore(score) {
 this._totalScore += score
}

totalScore() {
  return this._totalScore
}

finalFrameScore() {
  this.getFrameScore(9)
}
}

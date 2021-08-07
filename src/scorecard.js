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
  }

  currentScorecard() {
    return this._scorecard
  }

  getFrame(frame) {
    return this._scorecard[frame]
  }

  addToScorecard(frame, score) {
    if(frame === 'Bonus') {
      this._scorecard['Bonus'] = score
    } else {
      this._scorecard[frame].push(score)
    }
  }
}


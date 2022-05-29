class BowlingScorer {

  constructor() {
    this.scorecard = []
  }

  enterScore(pins) {
    if (pins > 10 || pins < 0) {
      return 'Please enter a score below 10, and above 0'
    }
    this.scorecard.push(pins)
  }

  score() {
    let score = 0
    let scorecardIndex = 0
    // the score function depends on reading off an already established and appended upon array
    //only when '#score' is called do we iterate through the entire scorecard since last entry
    // the frames are defined and iterated through within the score function itself
    for (let frameIndex = 0 ; frameIndex < 10 ; frameIndex++) {
      //strike logic
      //isStrike checks to see that the current score being checked during this iteration
      // of the scorecard was 10
      if (this.isStrike(scorecardIndex)) {
        score += this.strikeBonus(scorecardIndex)
        scorecardIndex += 1;
        // if we know that there's been a strike, then we know we can iterate to the next element within the scorecard
        continue;
        //continue is a great keyword (similar to break) that skips any conditionals beneath it and begins the next conditional
      }
      
      //if a strike doesn't apply then we're going to have to start considering/define a frameScore
      const frameScore = this.scorecard[scorecardIndex] + this.scorecard[scorecardIndex + 1]

      // spare logic
      // are the next two frames added equal to 10? if so, spare /
      if (this.isSpare(frameScore)) {
        score += this.spareBonus(scorecardIndex)
        //and if so, add the spare bonus
      } else {
        //otherwise nothing is going on here, frameScore is added to score. end of
        score += frameScore
      }

      scorecardIndex += 2
    } //end of for loop
    return score
  }

  isSpare(frameScore) {
    return frameScore === 10
  }

  spareBonus(scorecardIndex) {
    //10 plus only the first roll after that in the next frame
    return 10 + this.scorecard[scorecardIndex + 2]
  }

  isStrike(scorecardIndex) {
    // was the current score entry equal to a 10? if it was then it was a strike
    return this.scorecard[scorecardIndex] === 10
  }

  strikeBonus(scorecardIndex) {
    // 10 plus the next roll and the second roll after that in the next frame
    return 10 + this.scorecard[scorecardIndex + 1] + this.scorecard[scorecardIndex + 2]
  }
}

module.exports = BowlingScorer;
# class Scorecard

# constructor
  this.frame = 1;
  this.scorecard = [];

# methods:
playFullGame()
- const scorecard = new Scorecard;
- loop 9 times:
    - scorecard.newFrame()
    - scorecard.addFrameToScorecard()
- scorecard.newTenthFrame()
- totalScore = scorecard.calculateTotalScore
- if totalScore === 0, console.log / return gutter game message
- else if totalScore === 300, console.log / return perfect game message
- else console.log / return general totalScore message

newFrame()
- creates instance of Frame
- calls playFrame on instance Frame
- calls addFrameToScorecard

newTenthFrame()
- creates instance of Frame
- calls playFrame on instance of Frame
- calls addFrameToScorecard
- if (this.scorecard[18] === 10)
      call bonusStrikeRolls(firstScore, secondScore) on frame
      call getBonusRollScores()
- else if (this.scorecard[18] + this.scorecard[19] === 10)
      call bonusSpareRoll(score) on frame
      call getBonusRollScores()

addFrameToScorecard()
- calls getFrameScores() on instance of Frame
- adds each element of scores array to this.scorecard
- increments this.frame

calculateScoreWithoutBonusRolls
- works out total for first 20 scores (two scores for each frame) by iterating through this.scorecard
- doesn't calculate potential bonuses in 10th frame

calculateScoreFromBonusRolls
- calculates bonus points from extra rolls in 10th frame (if applicable), looks at 21st (and 22nd) elements of this.scorecard

calculateTotalScore
- declares totalScore = 0
- calls calculateScoreWithoutBonusRolls, adds to totalScore
- if bonus rolls took place in 10th frame (i.e., if there was a spare or strike):
    - calls calculateScoreFromBonusRolls, adds to totalScore
- return totalScore
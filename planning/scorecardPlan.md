# class Scorecard

# constructor
  this.frame = 1;
  this.scorecard = [];

# methods:
playFullGame()
- const scorecard = new Scorecard;
- loop 10 times:
    - scorecard.newFrame()
if
- totalScore = scorecard.calculateTotalScore
- if totalScore === 0, console.log / return gutter game message
- else if totalScore === 300, console.log / return perfect game message
- else console.log / return general totalScore message

newFrame(firstScore, secondScore)
- creates instance of Frame
- calls playFrame on instance Frame
- calls addFrameToScorecard(frame)

newTenthFrame(firstScore, secondScore, thirdScore, fourthScore)
- creates instance of Frame
- calls playFrame on instance of Frame
- if (firstScore === 10)
      call bonusStrikeRolls(thirdScore, fourthScore) on frame
      call getBonusRollScores()
- else if (firstScore + secondScore === 10)
      call bonusSpareRoll(thirdScore) on frame
      call getBonusRollScores()
- else
      only push first two scores to scorecard
- calls addFrameToScorecard

addFrameToScorecard(frame)
- calls getFrameScores() on instance of Frame
- adds each element of scores array to this.scorecard
- increments this.frame


seeScorecard()
- returns this.scorecard

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
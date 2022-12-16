# class Scorecard

# constructor
  this.frame = 1;
  this.scorecard = [];


# methods:
newFrame()
- creates instance of Frame
- calls playFrame on instance Frame
- calls addFrameToScorecard

newTenthFrame()
- creates instance of Frame
- calls playTenthFrame on instance of Frame
- calls addFrameToScorecard

addFrameToScorecard()
- calls getFrameScores() on instance of Frame
- adds each element of scores array to this.scorecard
- increments @frame

calculateScoreWithoutBonusRolls
- works out total for first 20 scores (two scores for each frame)
- doesn't calculate potential bonuses in 10th frame

calculateScoreFromBonusRolls
- calculates bonus points from extra rolls in 10th frame (if applicable)

calculateTotalScore
- declares totalScore = 0
- calls calculateScoreWithoutBonusRolls, adds to totalScore
- if bonus rolls took place in 10th frame (i.e., if there was a spare or strike):
    - calls calculateScoreFromBonusRolls, adds to totalScore

if totalScore === 0, console.log / return gutter game message
if totalScore === 300, console.log / return perfect game message
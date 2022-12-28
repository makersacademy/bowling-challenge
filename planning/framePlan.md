# class Frame

# constructor()
  this.frameScores = []

# methods:
playFrame(firstScore, secondScore)
- handles errors
- pushes each score to this.frameScores if valid

getFrameScores()
- returns this.frameScores array

bonusSpareRoll(score)

bonusStrikeRolls(firstScore, secondScore)

getBonusRollScores()




<!-- # Old
rollOne(score)
- raise error if score is not an int from 0 to 10
*- this.rollOneScore = score*
- pushes this.rollOneScore to this.frameScores
- if this.rollOneScore === 10:
    - this.rollTwoScore = 0
    - push this.rollTwoScore to this.frameScores

rollTwo(score)
- raise error if not an int from 0 to 10
*- this.rollTwoScore = score;*
- push this.rollTwoScore to this.frameScores

playTenthFrame()
- calls rollOne(score)
- calls rollTwo(score)
- if spare, call rollOne(score)
- if strike, call rollOne(score) and rollTwo(score) -->



<!-- # maybe methods
endFrame?
- pushes scores to scorecard array?

strike?
- stops a second roll from taking place

spare?
- marks bonus as spare -->

let mockScorecard = { pins: [
  [10, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 9, 10]
]}

scoring = new Scoring(mockScorecard.pins)

scoring.regularScorePerFrame()
console.log('regular scores below')
console.log(scoring.regularScore)

scoring.bonusScoreAllFrames()
console.log('bonus scores below')
console.log(scoring.bonusScore)

scoring.totalScoreAllFrames()
console.log('total scores below')
console.log(scoring.totalScorePerFrame)

scoring.findTotalScore()
console.log('total score below')
console.log(scoring.totalScore)
function spareRoll(){
  scorecard = new ScoreCard
  scorecard.frameInPlay.roll1.addPointsRoll(5)
  scorecard.frameInPlay.roll2.addPointsRoll(5)
  scorecard.frameInPlay.addPointsFrame()
  scorecard.finishFrame()
}

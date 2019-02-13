describe("EvaluateScoreSpec",function(){
  var scorecard
  var evaluateScore
  beforeEach(function(){
    scorecard = []
    evaluateScore = new EvaluateScore()
  })
  it ("can evaluate simple scores", function(){
    expect(evaluateScore.scorecard([[1,2],[5,3]])).toEqual([3,11])
  })
})

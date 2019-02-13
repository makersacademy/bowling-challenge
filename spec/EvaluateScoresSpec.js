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
  it ("can evaluate a spare with scores ahead", function(){
    expect(evaluateScore.scorecard([[1,9],[5,3]])).toEqual([15,23])
  })
  it ("evaluates a spare as 10 if subsequent frame is yet to be rolled",function(){
    expect(evaluateScore.scorecard([[1,9],[5,3],[5,5]])).toEqual([15,23,33])
  })
})

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

  it ("can evaluate a strike with regular scores ahead",function(){
    expect(evaluateScore.scorecard([[1,9],[10],[5,5]])).toEqual([20,40,50])
  })
  it ("can evaluate a strike with a strike score ahead",function(){
    expect(evaluateScore.scorecard([[1,9],[10],[10],[5,5]])).toEqual([20,45,65,75])
  })

  it ("evaluates an incomplete strike as 10 until it's completed",function(){
    expect(evaluateScore.scorecard([[1,9],[10]])).toEqual([20,30])
  })
})

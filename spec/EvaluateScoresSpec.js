describe("EvaluateScores",function(){
  var scorecard
  var evaluateScore
  it("can handle scores with /",function(){
    scorecard = [["1","/"],["2","5"]]
    evaluateScore = new EvaluateScore(scorecard);
    expect(evaluateScore.go()).toEqual([12,19])
  });
  it("can handle scores with X",function(){
    scorecard = [["X",null],["2","5"]]
    evaluateScore = new EvaluateScore(scorecard);
    expect(evaluateScore.go()).toEqual([17,24]);
  })

  //incomplete scores
});

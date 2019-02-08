describe("EvaluateScores",function(){
  var scorecard
  var evaluateScore
  it("can handle scores with /",function(){
    scorecard = [["1","/"],["2","5"]]
    evaluateScore = new EvaluateScore(scorecard);
    console.log(evaluateScore);
    expect(evaluateScore.go()).toEqual([12,19])
  });
});

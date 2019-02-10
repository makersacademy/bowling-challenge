describe("ScoreRecorder",function(){
  var scoreRecorder
  var scorecard
  beforeEach (function(){
    scorecard = []
    scoreRecorder = new ScoreRecorder(scorecard)
  })
  it ("records a new score in a given array",function(){
    scoreRecorder.roll(5)
    expect(scorecard).toEqual([5])
  })
});

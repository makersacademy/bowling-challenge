describe("ScoreRecorder",function(){
  var scorecard;
  var scoreRecorder;
  beforeEach(function(){
    scorecard = []
    scoreRecorder = new ScoreRecorder(scorecard);
  });
  it("can record a single turn", function(){
    scoreRecord.roll("5");
    scoreRecord.roll("4");
    expect(scorecard).toEqual([["5","4"]]);
  });
});

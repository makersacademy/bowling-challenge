describe("Scorecard",function(){
  var scorecard
  beforeEach(function(){
    scorecard = new Scorecard
  })
  it("can record a score",function(){
    scorecard.record.roll(5);
    expect(scorecard.display()).toEqual([[5]])
  })
})

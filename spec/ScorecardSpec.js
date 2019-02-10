describe("Scorecard",function(){
  var scorecard
  beforeEach(function(){
    scorecard = new Scorecard
  })
  it("can record a score",function(){
    scorecard.record.roll(5);
    expect(scorecard.display()).toEqual([[5]])
  })
  it("can record an entire game", function(){
    for( var i = 1; i < 21; i++){
      scorecard.record.roll(4)
    }
    expect(scorecard.display()).toEqual(
      [[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4]]
    )
  })
})

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
  it("throws an error if an attempt is made to record a roll after game is over",function(){
    for( var i = 1; i < 21; i++){
      scorecard.record.roll(4)
    }
    expect(function(){scorecard.record.roll(5)}).toThrow(new Error("game is over"))
  })
  it("can record a strike", function(){
    scorecard.record.roll(3);
    scorecard.record.roll(4);
    scorecard.record.roll(10);
    scorecard.record.roll(5);
    scorecard.record.roll(2);
    expect(scorecard.display()).toEqual(
      [[3,4],[10],[5,2]]
    )
    scorecard.record.roll(10);
    scorecard.record.roll(5);
    expect(scorecard.display()).toEqual(
      [[3,4],[10],[5,2],[10],[5]]
    )
  });
  it("throws a score error if roll exceeds 10",function(){
    expect(function(){scorecard.record.roll(11)}).toThrow(new Error("score error"))
  });
  //frame exceeds 10
})
//cant exceed 10 frames
//cant exceed 10 points

describe("BowlingScore", function(){

  it("should accept a roll", function(){
    var bowlingScore = new BowlingScore();
    bowlingScore.roll(2)
    expect(bowlingScore.pinsLeft()).toEqual(8)
  })

})

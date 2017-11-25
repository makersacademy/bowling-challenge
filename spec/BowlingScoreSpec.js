describe("BowlingScore", function(){

  var bowlingScore;

  beforeEach(function(){
    bowlingScore = new BowlingScore();
  })

  it("should accept a roll", function(){
    bowlingScore.roll(2);
    expect(bowlingScore.pinsLeft()).toEqual(8);
  })

  describe("frames", function(){
    it("should print the current frame",function(){
      bowlingScore.roll(3);
      expect(bowlingScore.currentFrame()).toEqual(1);
    })
  })

  describe("score", function(){
    it("should print the current score",function(){
      bowlingScore.roll(7);
      bowlingScore.roll(2);
      expect(bowlingScore.score()).toEqual(9);
    })

  })
})

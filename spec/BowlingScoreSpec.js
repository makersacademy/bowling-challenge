describe("BowlingScore", function(){

  var bowlingScore;

  beforeEach(function(){
    bowlingScore = new BowlingScore();
  })

  // it("should accept a roll", function(){
  //   bowlingScore.roll(2);
  //   expect(bowlingScore.pinsLeft()).toEqual(8);
  // })

  it("retun all the rolls", function(){
    bowlingScore.roll(4);
    bowlingScore.roll(5);
    expect(bowlingScore.rolls()).toEqual([4, 5]);
  })


  it("retun all the scores", function(){
    expect(bowlingScore.scores()).toEqual(jasmine.any(Array));
  })

  describe("frames", function(){
    it("should print the current frame",function(){
      expect(bowlingScore.currentFrame()).toEqual(1);
    })
  })

  describe("strike", function(){
    it("should print the current score",function(){
      bowlingScore.roll(10);
      bowlingScore.calculateScore();
      expect(bowlingScore.score()).toEqual(10);
    })

    it("scores should update to include the next 2 rolls",function(){
      bowlingScore.roll(10);
      bowlingScore.roll(2);
      bowlingScore.roll(5);
      bowlingScore.calculateScore();
      expect(bowlingScore.scores()[0]).toEqual(17);
    })

  })

  describe("spare", function(){
    it("scores should update to include the next roll from the next frame", function(){
      bowlingScore.roll(5);
      bowlingScore.roll(5);
      bowlingScore.roll(2);
      bowlingScore.calculateScore();
      expect(bowlingScore.scores()[0]).toEqual(12);
    })
  })

  describe("normal rolls", function(){
    it("score should be the same of the the 2 rolls in the same frame", function(){
      bowlingScore.roll(2);
      bowlingScore.roll(5);
      bowlingScore.roll(2);
      bowlingScore.calculateScore();
      expect(bowlingScore.scores()[0]).toEqual(7);
    })
  })
})

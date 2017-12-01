describe("ScoreCard", function(){

  beforeEach(function(){
    scorecard = new ScoreCard()
  });

  describe("#addpoints", function(){
    it("adds the number of points", function(){
      scorecard.addPointsScore()
      expect(scorecard.points).toEqual(0);
    });
  });

  describe("bonus check", function(){
    it("checks what bonus is needed for frame", function(){
      expect(scorecard.frameInPlay.bonusCheck()).toEqual('no-bonus')
    })
  })
});

describe("Frame", function(){

  beforeEach(function(){
    frame = new Frame()
  });


  describe("strike check", function(){
    xit("returns true with 10 points", function(){
      frame.roll1.points = 10
      frame.addPointsFrame()
      expect(frame.endFrameCheck()).toEqual(true)
    });
  });

  describe(" FIRST roll strike", function(){
    xit("returns strike with 10 points", function(){
      frame.roll1.points = 10
      frame.addPointsFrame()
      expect(frame.rollCount).toEqual(2)
    });
  });

  describe("end frame", function(){
    it(" SECOND returns true at the end of two rolls", function(){
      frame.roll1.closeRoll()
      frame.roll2.closeRoll()
      frame.rollCheck()
      expect(frame.endFrameCheck()).toEqual(true)
    });
  });

  describe("frame points", function(){
    it("returns the points sum of roll 1 and roll2", function(){
      frame.roll1.points = 5
      frame.roll2.points = 6
      frame.addPointsFrame()
      expect(frame.points).toEqual(11)
    });
  });

  describe("roll check", function(){
    it("returns the closed value of rolls", function(){
      expect(frame.roll1Check()).toEqual(false)
    });
  });
});


describe("Roll", function(){

  beforeEach(function(){
    roll = new Roll()
  });

  describe("add points", function(){
    it("adds the number of points passed as argument", function(){
      roll.addPointsRoll(5)
      expect(roll.points).toEqual(5)
    });
  });

  describe("roll close", function(){
    it("closes roll", function(){
      roll.closeRoll()
      expect(roll.closed).toEqual(true)
    })
  })
});



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
    });
  });

  describe("finish frame", function(){
    it("adds the frame in play to the frames array", function(){
      scorecard.finishFrame()
      expect(scorecard.frames.length).toEqual(1);
    });
  });

  describe("adding bonus points SPARE", function(){
    it("it adds roll 1 points to previous frame if spare bonus applies", function(){
      scorecard.frameInPlay.roll1.addPointsRoll(5)
      scorecard.frameInPlay.roll2.addPointsRoll(5)
      scorecard.frameInPlay.addPointsFrame()
      scorecard.finishFrame()
      scorecard.newFrame()
      //debugger
      scorecard.frameInPlay.roll1.addPointsRoll(4)
      scorecard.bonusScore()
      oldFrame = scorecard.frames.pop()
      console.log(bonusFrame)
      expect(oldFrame.points).toEqual(14);
    });
  });

  describe("adding bonus points STRIKE", function(){
    xit("adds roll 1 and roll 2 points to previous frame if spare bonus applies", function(){
      scorecard.frameInPlay.roll1.addPointsRoll(10)
      scorecard.frameInPlay.addPointsFrame()
      scorecard.finishFrame()
      scorecard.newFrame()
      scorecard.frameInPlay.roll1.addPointsRoll(4)
      scorecard.frameInPlay.roll2.addPointsRoll(3)
      scorecard.bonusScore()
      oldFrame = scorecard.frames.pop()
      expect(oldFrame.points).toEqual(17)
    })
  })

  describe("enter bonus mode", function(){
    it("enters spare, strike or no bonus mode for new frame based on previous frame", function(){
      scorecard.frameInPlay.roll1.addPointsRoll(5)
      scorecard.frameInPlay.roll2.addPointsRoll(5)
      scorecard.frameInPlay.addPointsFrame()
      scorecard.frameInPlay.rollCheck()
      scorecard.frameInPlay.bonusCheck()
      expect(scorecard.setBonusMode()).toEqual('spare')
    });
  });

  describe("roll score return", function(){
    it("returns the score of the roll", function(){
      scorecard.frameInPlay.roll1.addPointsRoll(5)
      expect(scorecard.roll1Score()).toEqual(5)
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

  describe("roll check", function(){
    it("adds the correct number of rolls to counter in frame", function(){
      frame.roll1.addPointsRoll(5)
      frame.rollCheck()
      expect(frame.rollCount).toEqual(1)
    });
  });

  describe("roll check 1", function(){
    it("returns the value of closed for roll 1", function(){
      frame.roll1.addPointsRoll(5)
      expect(frame.roll1Check()).toEqual(true)
    });
  });

  describe("roll", function(){
    it("adds the argument points to the relevant roll", function(){
      frame.roll(6)
      expect(frame.roll1.points).toEqual(6)
    });
  });

  describe("roll", function(){
    it("adds the argument points to the relevant roll", function(){
      frame.roll(4)
      console.log(frame.rollCount)
      frame.roll(6)
      console.log(frame.rollCount)
      expect(frame.roll2.points).toEqual(6)
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
    });
  });
});

describe("Frame", function(){

  var frame;
  var frame2;

  beforeEach(function(){
    frame = new Frame(function(){});
  })

  describe("Creation", function(){
    it("sets a maximum of 10 points", function(){
      expect(frame.MAX_POINTS).toEqual(10);
    })
    it("sets a maximum value of 2 rolls", function(){
      expect(frame.MAX_ROLLS).toEqual(2);
    })
    it("sets an initial roll count of 0", function(){
      expect(frame.rollCount).toEqual(0);
    })
    it("sets an initial score of 0", function(){
      expect(frame.score).toEqual(0);
    })
    it("sets an initial empty points array", function(){
      expect(frame.points).toEqual([]);
    })
  })

  describe("Scores", function(){
    it("can be randomized per roll", function(){
      expect(frame.calculateRollScore()).toBeGreaterThan(-1);
      expect(frame.calculateRollScore()).not.toBeGreaterThan(10);
    })
    it("can be added per roll", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(4);
      frame.roll();
      expect(frame.score).toEqual(4);
    })
    it("cannot exceed 10", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(10);
      frame.roll();
      expect(frame.roll()).toEqual("Frame is over");
    })
  })

  describe("Points", function(){
    it("can be updated after each roll", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(6);
      frame.roll();
      expect(frame.points).toEqual([6]);
    })
    it("can calculate available points to be won", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(6);
      frame.roll();
      expect(frame.availablePoints()).toEqual(4);
    })
    it("can recalculate if roll is higher than available points", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(8);
      frame.roll();
      expect(frame.calculateRollScore).not.toBeGreaterThan(2);
    })
  })

  describe("Roll", function(){
    it("count increases by 1 when a roll is taken", function(){
      frame.roll();
      expect(frame.rollCount).toEqual(1);
    })
    it("count cannot exceed 2", function(){
      frame.roll();
      expect(frame.roll()).toEqual("Frame is over");
    })
  })

  describe("End", function(){
    it("can indicate a frame is over when 10 points has been reached", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(10);
      frame.roll();
      expect(frame.hasEnded()).toEqual(true);
    })
    it("can indicate a frame is over when 2 rolls have been taken", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(4);
      for(var i = 0; i<2; i++){ frame.roll(); }
      expect(frame.hasEnded()).toEqual(true);
    })
    it("can indicate a frame is not over when 6 points has been reached in 1 roll", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(6);
      frame.roll();
      expect(frame.hasEnded()).toEqual(false);
    })
  })

  describe("Strike or Spare", function(){
    it("can identify a strike", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(10);
      frame.roll();
      expect(frame.isStrike()).toEqual(true);
    })
    it("can identify not a strike", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(4);
      frame.roll();
      expect(frame.isStrike()).toEqual(false);
    })
    it("can identify a spare", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(5);
      frame.roll();
      frame.roll();
      expect(frame.isSpare()).toEqual(true);
    })
    it("can identify not a spare", function(){
      spyOn(frame, "calculateRollScore").and.returnValue(4);
      frame.roll();
      frame.roll();
      expect(frame.isSpare()).toEqual(false);
    })
  })

})

describe("ScoreCard", function(){

  beforeEach(function(){
    scorecard = new ScoreCard()
  });

  describe("#addpoints", function(){
    it("adds the number of points passed as argument", function(){
      scorecard.addPointsScore(8)
      expect(scorecard.points).toEqual(8);
    });
  });
});

describe("Frame", function(){

  beforeEach(function(){
    frame = new Frame()
  });

  describe("add points", function(){
    it("adds the number of points passed as an argument", function(){
      frame1 = new Frame()
      frame1.addPointsFrame(5)
      expect(frame1.points).toEqual(5)
      expect(frame1.rollCount).toEqual(1)
    });
  });

  describe("strike", function(){
    xit("sets the frame counter to 2", function(){
      frame.strikeHit()
      expect(frame.rollCount).toEqual(2)
    });
  });

  describe("strike check", function(){
    it("returns true with 10 points", function(){
      frame2 = new Frame()
      frame2.addPointsFrame(10)
      expect(frame2.strikeCheck()).toEqual(true)
    });
  });

  describe("roll strike", function(){
    it("returns strike with 10 points", function(){
      frame3 = new Frame()
      frame3.addPointsFrame(10)
      expect(frame3.rollCount).toEqual(2)
    });
  });

  describe("end frame", function(){
    it("returns true at the end of two rolls", function(){
      frame.addPointsFrame(10)
      expect(frame.endFrameCheck()).toEqual(true)
    });
  });

  describe("end frame", function(){
    it("returns true at the end of two rolls", function(){
      frame.addPointsFrame(10)
      expect(frame.addPointsFrame).toEqual("initiate new roll")
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
});

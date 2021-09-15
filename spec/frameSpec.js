describe("Frame", function () {
  let frame;
  
  beforeEach(function () {
    frame = new Frame();
  });

  describe("calculates the score for the frame", function () {
    it("returns correct score for frame", function () {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.calcFrameTotal()).toEqual(9);
    });
  });

  describe("calculates the score for the frame with bonus", function () {
    it("updates frame total to correct amount", function () {
      frame.addRoll(5);
      frame.addRoll(5);
      frame.addBonusScore(5);
      expect(frame.calcFrameTotal()).toEqual(15);
    });
  });

  describe("expects to capture when a spare has been scored", function () {
    it("isSpare returns 'true' when two 5s are rolled", function () {
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isSpare()).toEqual(true);
    });

    it("isSpare returns 'true' when a 2 and an 8 are rolled", function () {
      frame.addRoll(2);
      frame.addRoll(8);
      expect(frame.isSpare()).toEqual(true);
    });

    it("isStrike returns 'false' when a 2 and an 8 are rolled", function () {
      frame.addRoll(2);
      frame.addRoll(8);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe("expects to capture when a strike has been scored", function () {
    it("isStrike returns 'true' when a 10 is rolled", function () {
      frame.addRoll(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it("isSpare returns 'false' when a 10 is rolled", function () {
      frame.addRoll(10);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe("expects to return false for Spare and Strike when neither has been scores", function () {
    it("returns false for isSpare() when an 8 has been rolled", function () {
      frame.addRoll(4);
      frame.addRoll(4);
      expect(frame.isSpare()).toEqual(false);
    });
    
    it("returns false for isStrike() when an 8 has been rolled", function () {
      frame.addRoll(4);
      frame.addRoll(4);
      expect(frame.isStrike()).toEqual(false);
    });
  });
});

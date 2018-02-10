describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("enters bowl scores", function() {
    it("enters a first bowl into a frame", function() {
      frame.enterRoll(3);
      expect(frame.bowls).toEqual([3])
    });

    it("enters a first bowl into a frame", function() {
      frame.enterRoll(3);
      frame.enterRoll(1);
      expect(frame.bowls).toEqual([3,1])
    });

    it("knows the score of a complete frame", function() {
      frame.enterRoll(3);
      frame.enterRoll(1);
      expect(frame.total).toEqual(4)
    });
  });

  describe("bowling a spare", function() {
    it("is not a spare by default", function() {
      expect(frame.isSpare).toEqual(false)
    });

    it("knows it's a spare", function() {
      frame.enterRoll(7);
      frame.enterRoll(3);
      expect(frame.isSpare).toEqual(true)
    });
  });

  describe("bowling a strike", function() {
    it("is not a strike by default", function() {
      expect(frame.isStrike).toEqual(false)
    });

    it("knows it's a strike", function() {
      frame.enterRoll(10);
      expect(frame.isStrike).toEqual(true)
    });
  });
});

describe("Player", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
    spyOn(frame, "firstRoll");
    spyOn(frame, "secondRoll");
  });

  describe("#roll", function() {
    it("returns a number between zero and its given maximum", function() {
      expect(Player.roll(10) >= 0).toBe(true);
      expect(Player.roll(10) <= 10).toBe(true);
    });
  });

  describe("#rollFrame", function() {
    it("supplies both rolls for the given frame", function() {
      Player.rollFrame(frame);
      expect(frame.firstRoll).toHaveBeenCalled();
      expect(frame.secondRoll).toHaveBeenCalled();
    });
  });

  describe("#rollBonusFrame", function() {
    it("rolls twice if the supplied frame is a strike", function() {
      Player.rollBonusFrame(frame, "strike");
      expect(frame.firstRoll).toHaveBeenCalled();
      expect(frame.secondRoll).toHaveBeenCalled();
    });

    it("rolls once if the supplied frame is a spare", function() {
      Player.rollBonusFrame(frame, "spare");
      expect(frame.firstRoll).toHaveBeenCalled();
      expect(frame.secondRoll).not.toHaveBeenCalled();
    });
  });
});

describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe("initialization", function() {
    it("contains values for two rolls", function() {
      expect(frame).toEqual(jasmine.objectContaining({
        _roll1: null,
        _roll2: null
      }));
    });
  });

  describe("getting the score", function() {
    it("calculates the score for each roll", function () {
      frame.firstRoll(5);
      frame.secondRoll(1);
      expect(frame.getScore()).toEqual(6);
    });
  });

  describe("scoring a strike", function() {
    it("knows if a strike has been rolled", function() {
      frame.firstRoll(10);
      expect(frame.isStrike()).toBe(true);
    });
  });

  describe("scoring a spare", function() {
    it("knows if it is a spare", function() {
      frame.firstRoll(5);
      frame.secondRoll(5);
      expect(frame.isStrike()).toBe(false);
      expect(frame.isSpare()).toBe(true);
    });
  });

  describe("bonus type", function() {
    it("returns strike if the next frame will give a strike bonus", function() {
      frame.firstRoll(10);
      expect(frame.bonusType()).toEqual("strike");
      expect(frame.bonusType()).not.toEqual("spare");
    });

    it("returns spare if the next frame will give a spare bonus", function() {
      frame.firstRoll(5);
      frame.secondRoll(5);
      expect(frame.bonusType()).not.toEqual("strike");
      expect(frame.bonusType()).toEqual("spare");
    });
  });

  describe("getFirstRoll", function() {
    it("returns the first roll for spare calculation", function() {
      frame.firstRoll(5);
      expect(frame.getFirstRoll()).toEqual(5);
    });
  });
});

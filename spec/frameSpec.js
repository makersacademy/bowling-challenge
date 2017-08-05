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
});

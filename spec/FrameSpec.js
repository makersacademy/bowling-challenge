describe("Frame", function() {
  var frame;
});

  beforeEach(function() {
    frame = new Frame();
  });

  it("should have a starting firstRoll score of 0", function() {
    expect(frame.rollOne).toEqual(0)
  });
  it("should have a starting secondRoll score of 0", function() {
    expect(frame.rollTwo).toEqual(0)
  });

  describe("firstRoll", function() {
    it("should store given score in rollOne", function() {
      frame.firstRoll(4)
      expect(frame.rollOne).toEqual(4)
    });
  });

  describe("secondRoll", function() {
    it("should store given score in rollTwo", function() {
      frame.secondRoll(5);
      expect(frame.rollTwo).toEqual(5);
    });
    it("should not be rolled if rollOne was a strike", function() {
      frame.firstRoll(10);
      expect(function() { frame.secondRoll(2) }).toThrow("First roll was a strike, cannot roll a second during this frame.");
    });
  });

  describe("_isStrike", function() {
    it("should return true if firstRoll is 10", function() {
      frame.firstRoll(10);
      expect(frame._isStrike()).toBe(true);
    });
  });
  describe("_isSpare", function() {
    it("should return true if rollOne and rollTwo add to 10", function() {
      frame.firstRoll(8);
      frame.secondRoll(2);
      expect(frame._isSpare()).toBe(true);
    });
  });
  describe("_clearFrame", function() {
    it("should clear the current frame", function() {
      frame.firstRoll(8);
      frame.secondRoll(2);
      frame._clearFrame();
      expect(frame.rollOne).toEqual(0);
      expect(frame.rollTwo).toEqual(0);
    });
  });

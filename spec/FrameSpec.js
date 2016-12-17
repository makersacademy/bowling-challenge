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

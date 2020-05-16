describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  it("should have an index", function() {
    expect(frame.index).toEqual(1);
  });

  describe("first roll", function() {
    it("should return score", function() {
      frame.first = 5;
      expect(frame.first).toEqual(5);
      expect(frame.hasStrike()).toEqual(false);
    });

    it("#hasStrike should return true if score is 10", function() {
      frame.first = 10;
      expect(frame.hasStrike()).toEqual(true);
    });
  });

  describe("second roll", function() {
    beforeEach(function() {
      frame.first = 3;
    });

    it("should return score", function() {
      frame.second = 5;
      expect(frame.second).toEqual(5);
    });

    it("#score should return total score", function() {
      frame.second = 5;
      expect(frame.score()).toEqual(8);
      expect(frame.hasSpare()).toEqual(false);
    });

    it("#hasSpare should return true if total score is 10", function() {
      frame.second = 7;
      expect(frame.hasSpare()).toEqual(true);
    });
  });
});

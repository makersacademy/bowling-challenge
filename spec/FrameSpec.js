describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  it("should have an index", function() {
    expect(frame.index).toEqual(1);
  });

  describe("#displayScore", function() {
    beforeEach(function() {
      frame.firstRoll   = 5;
      frame.secondRoll  = 4;
    });

    it("should display blank if there are turns pending", function() {
      frame.turns = 1;
      expect(frame.displayScore()).toEqual("")
    });

    it("should display score if there are no turns pending", function() {
      frame.turns = 0;
      expect(frame.displayScore()).toEqual(9)
    });
  });

  describe("#firstRoll", function() {
    it("should return score", function() {
      frame.firstRoll = 5;
      expect(frame.first).toEqual(5);
      expect(frame.hasStrike()).toEqual(false);
    });

    it("#hasStrike should return true if score is 10", function() {
      frame.firstRoll = 10;
      expect(frame.hasStrike()).toEqual(true);
      expect(frame.turns).toEqual(2);
    });
  });

  describe("#secondRoll", function() {
    beforeEach(function() {
      frame.firstRoll = 3;
    });

    it("should return score", function() {
      frame.secondRoll = 5;
      expect(frame.second).toEqual(5);
    });

    it("#score should return total score", function() {
      frame.secondRoll = 5;
      expect(frame.score()).toEqual(8);
      expect(frame.hasSpare()).toEqual(false);
    });

    it("#hasSpare should return true if total score is 10", function() {
      frame.secondRoll = 7;
      expect(frame.hasSpare()).toEqual(true);
      expect(frame.turns).toEqual(1);
    });
  });
});

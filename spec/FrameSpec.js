describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#Add", function() {
    it("Scores are added to the rolls array", function() {
      frame.add(3, 4);
      expect(frame.rolls).toEqual([3, 4])
    });

    it("Raises error if only one argument passed in that isn't 10", function() {
      expect(function() { frame.add(1) }).toThrow(new Error("There must be two rolls in a frame or one strike"))
    });

    it("Does not raise error if strike is passed as the only argument", function() {
      frame.add(10);
      expect(frame.rolls).toEqual([10, undefined])
    });
  });

  describe("#Add: Error Messages", function() {
    it("Raises an error if total is above 10", function() {
      expect(function() {frame.add(10, 1)}).toThrow(new Error("Impossible frame with arguments provided"))
    });

    it("Raises an error if total is below 0", function() {
      expect(function() {frame.add(-3, -1)}).toThrow(new Error("Impossible frame with arguments provided"))
    });
  });

  describe("#Total", function() {
    it("Returns the total of the two rolls", function() {
      frame.add(3,4);
      expect(frame.total()).toEqual(7)
    });
  });


  describe("#Check Strike", function() {
    it("Changes _isStrike to true if first roll was a strike", function() {
      frame.add(10, 0);
      expect(frame.strike).toEqual(true);
    });
  });

  describe("#Check Spare", function() {
    it("Changes _isSpare to true if both rolls equal 10", function() {
      frame.add(6, 4);
      expect(frame.spare).toEqual(true);
    });
  });
});

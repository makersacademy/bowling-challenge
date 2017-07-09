describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe("#initialise", function () {
    it("first roll score starts at 0", function () {
      expect(frame.firstRoll).toEqual(0);
    });
    it("second roll score starts at 0", function () {
      expect(frame.secondRoll).toEqual(0);
    });
    it("spare is false by default", function () {
      expect(frame.spare).toEqual(false);
    });
    it("strike is false by default", function () {
      expect(frame.strike).toEqual(false);
    });
    it("rollsMade is 0 by default", function () {
      expect(frame.rollsMade).toEqual(0);
    });
  });

  describe("#roll", function () {
    beforeEach(function () {
      frame.roll(5);
    });

    it("records first roll score", function () {
      expect(frame.firstRoll).toEqual(5);
    });
    it("records second roll score", function () {
      frame.roll(4);
      expect(frame.secondRoll).toEqual(4);
    });
    it("raises error if too many pins entered", function () {
      expect(function() {frame.roll(20)}).toThrow("Too many pins, please start a new frame")
    });
    it("raises error if more than two rolls are attempted", function () {
      frame.roll(4);
      expect(function() {frame.roll(2)}).toThrow("Only two rolls allowed per frame")
    });

    it("changes spare to true when all pins are down on secondRoll", function () {
      frame.roll(5)
      expect(frame.spare).toEqual(true);
    });
  });

  it("changes strike to true when 10 is scored on first roll", function () {
    frame.roll(10);
    expect(frame.strike).toEqual(true);
  });

});

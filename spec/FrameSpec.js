describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("Begins with a score of 0", function() {
    expect(frame.score).toEqual(0);
  });

  describe("Tallying Frame Score", function() {

    it("Can have a roll score added to its score", function() {
      frame.addScore(6);
      expect(frame.score).toEqual(6);
    });

    it("Knows how many rolls have been added to it", function() {
      frame.addScore(6);
      frame.addScore(3);
      expect(frame.rollCount).toEqual(2);
    });

    it("Knows that two rolls totaling 9 or less closes the frame", function() {
      frame.addScore(6);
      frame.addScore(3);
      expect(frame.isClosed).toBe(true);
    });

    it("Knows that a spare allows for an extra roll", function() {
      frame.addScore(6);
      frame.addScore(4);
      expect(frame.isSprike).toBe(true);
      expect(frame.isClosed).toBe(false);
      frame.addScore(6);
      expect(frame.score).toEqual(16);
      expect(frame.isClosed).toBe(true);
    });

    it("Knows that a strike allows for 2 extra rolls", function() {

      frame.addScore(10);
      expect(frame.isSprike).toBe(true);
      frame.addScore(6);
      expect(frame.isClosed).toBe(false);
      frame.addScore(3);
      expect(frame.score).toEqual(19);
      expect(frame.isClosed).toBe(true);


    });

  });



});

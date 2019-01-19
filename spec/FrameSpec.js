describe("Frame", function() {
  var frame;

    beforeEach(function() {
      frame = new Frame();
    });

    it("register rolls", function() {
      frame.roll(0);
      frame.roll(0);
      expect(frame.rolls[0]).toEqual(0);
      expect(frame.rolls[1]).toEqual(0);
    });

    it("calculates the score of the frame", function() {
      frame.roll(0);
      frame.roll(0);
      expect(frame.calculateFrameScore()).toEqual(0);
    });

  });

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it ("should start with default of 2 rolls remaining", function() {
    expect(frame.rollsRemaining).toEqual(2);
  });

  describe('knows when the frame is in progress', function() {
    it ("on a new frame", function() {
      expect(frame.isInProgress()).toBe(true);
    });

    it ("after a first roll that is not a strike", function() {
      frame.registerRoll(2);
      expect(frame.isInProgress()).toBe(true);
    });
  })

  describe('knows when the frame has ended', function() {
    it ("after two rolls", function() {
      frame.registerRoll(2);
      frame.registerRoll(2);
      expect(frame.isInProgress()).toBe(false);
    });

    it ("after a strike", function() {
      frame.registerRoll(10);
      expect(frame.isInProgress()).toBe(false);
    });
  })

  describe('knows the total score', function() {
    it ("after two rolls", function() {
      frame.registerRoll(2);
      frame.registerRoll(2);
      expect(frame.totalScore()).toBe(4);
    });

    it ("after a strike", function() {
      frame.registerRoll(10);
      expect(frame.totalScore()).toBe(10);
    });
  })
});

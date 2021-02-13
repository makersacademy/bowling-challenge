describe ('frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('add', function() {
    it('adds pins to frame', function() {
      frame.add(4);
      frame.add(1);
      expect(frame.pins).toEqual([4, 1]);
    });
  });

  describe('_isComplete', function() {
    it('returns true after 2 rolls', function() {
      frame.add(4);
      frame.add(3);
      expect(frame.isComplete()).toBe(true);
    });

    it('returns true if strike', function() {
      frame.add(10);
      expect(frame.isComplete()).toBe(true);
    });
  });

  describe('result', function() {
    it('returns sum of frame (not spare or strike)', function() {
      frame.add(4);
      frame.add(3);
      expect(frame.result()).toEqual(7);
    });
  });

  describe('isaStrike', function() {
    it('returns true if first roll is 10', function() {
      frame.add(10);
      expect(frame.isaStrike()).toBe(true);
    });
  });

  describe('isaSpare', function() {
    it('returns true if 2 rolls sum to 10', function() {
      frame.add(6);
      frame.add(4);
      expect(frame.isaSpare()).toBe(true);
    });

    it('returns false if strike', function() {
      frame.add(10);
      expect(frame.isaSpare()).toBe(false);
    });
  })

  describe('isNotStrikeOrSpare', function() {
    it('returns true if frame is not strike or spare', function() {
      frame.add(5);
      frame.add(2);
      expect(frame.isNotStrikeOrSpare()).toBe(true);
    });

    it('returns false if last frame is spare', function() {
      frame.add(7);
      frame.add(3);
      expect(frame.isNotStrikeOrSpare()).toBe(false);
    });

    it('returns false if last frame is spare', function() {
      frame.add(10);
      expect(frame.isNotStrikeOrSpare()).toBe(false);
    });
  });

});

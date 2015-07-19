describe('Frame', function() {
  
  var frame;
  
  beforeEach(function() {
    frame = new Frame();
  });

  describe('can record', function() {
    it('a single roll', function() {
      frame.roll(5);
      expect(frame.scoreRecord).toEqual([5]);
    });

    it('two rolls', function() {
      frame.roll(5);
      frame.roll(4);
      expect(frame.scoreRecord).toEqual([5,4]);
    });
  });

  describe('is in progress', function() {
    it('after no rolls', function() {
      expect(frame.isInProgress()).toBe(true);
    });

    it('after 1 roll that is not a strike', function() {
      frame.roll(4);
      expect(frame.isInProgress()).toBe(true);
    });
  });

  describe('is not in progress', function() {
    it('after two rolls', function() {
      frame.roll(5);
      frame.roll(4);
      expect(frame.isInProgress()).toBe(false);
    });

    it('after a strike', function() {
      frame.roll(10);
      expect(frame.isInProgress()).toBe(false);
    });
  });


  describe('knows', function() {
    it('when there has been a strike', function() {
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('when there has not been a strike', function() {
      frame.roll(9);
      expect(frame.isStrike()).toBe(false);
    });

    it('when there has been a spare', function() {
      frame.roll(3);
      frame.roll(7);
      expect(frame.isSpare()).toBe(true);
    });

    it('when there has not been a spare', function() {
      frame.roll(3);
      frame.roll(6);
      expect(frame.isSpare()).toBe(false);
    });

    it('its own score', function() {
      frame.roll(3);
      frame.roll(6);
      expect(frame.totalScore()).toEqual(9);
    });

    it('its total score plus any bonus', function() {
      frame.roll(3);
      frame.roll(7);
      frame.scoreBonus.push(10);
      expect(frame.totalScoreWithBonus()).toEqual(20);
    });

  });
});


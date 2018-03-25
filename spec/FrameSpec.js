describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should initally have 10 pins', function() {
    expect(frame._pins).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should initally have 0 rounds played', function() {
    expect(frame._roundsPlayed).toEqual(0);
  });

  describe('pinsKnockedOver', function() {
    it('should return 3 pins remaining if 7 pins knocked over', function() {
      frame.pinsKnockedOver(7);
      expect(frame._pins).toEqual([1,2,3]);
    });

    it('should return 5 pins remaining if 5 pins knocked over', function() {
      frame.pinsKnockedOver(5);
      expect(frame._pins).toEqual([1,2,3,4,5]);
    });

    it('it should return 0 pins remaining if 10 pins knocked over', function() {
      frame.pinsKnockedOver(10);
      expect(frame._pins).toEqual([]);
    });
  });

  describe('isStrikeOnFirstRound', function() {
    it('should return true if one round played and all pins knocked over', function() {
      frame.play(10);
      expect(frame.isStrikeOnFirstRound()).toEqual(true);
    });

    it('should return false if one round played a not all pins knocked over', function() {
      frame.play(5);
      expect(frame.isStrikeOnFirstRound()).toEqual(false);
    });
  });

  describe('play', function() {
    it('should play a round of the frame', function() {
      expect(function() {
        frame.play(4);
      }).not.toThrow();
    });

    it('shoulds throw a error if more than 2 rounds are played', function() {
      frame.play(2);
      frame.play(4);
      expect(function() {
        frame.play(2)
      }).toThrowError('Max number of rounds played');
    });
  });
});

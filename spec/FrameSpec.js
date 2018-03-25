describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

describe('initial', function() {
  it('should initally have 10 pins', function() {
    expect(frame._pins).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should initally have 0 rounds played', function() {
    expect(frame._roundsPlayed).toEqual(0);
  });

  it('should initally have a score of 0', function() {
    expect(frame._score).toEqual(0);
  });
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

    it('should throw an error if pins knocked over are greater than the pins remaining', function() {
      frame.pinsKnockedOver(5);
      expect(function() {
        frame.play(20);
      }).toThrowError('Number of pins knocked over exceeds number of pins in frame');
    });
  });

  describe('isStrikeOnFirstRound', function() {
    it('should return true if one round played and all pins knocked over', function() {
      frame.play(10);

      expect(frame.isStrikeOnFirstRound()).toEqual(true);
    });

    it('should return false if one round played and not all pins knocked over', function() {
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

    it('should throw a error if more than 2 rounds are played', function() {
      frame.play(2);
      frame.play(4);

      expect(function() {
        frame.play(2)
      }).toThrowError('Max number of rounds played');
    });

    it('should set bonus frame to true if strike', function() {
      frame.play(10);
      expect(frame._bonusFrame).toEqual(true);
    });

    it('should set bonus frame to true if spare', function() {
      frame.play(5);
      frame.play(5);

      expect(frame._bonusFrame).toEqual(true);
    });
  });

  describe('score', function() {
    it('should return the correct score of the frame', function() {
      frame.play(2);
      frame.play(4);

      expect(frame.score()).toEqual(6);
    });
  });

  describe('isBonusFrame', function() {
    it('should return true if game included a strike', function() {
      frame.play(10);

      expect(frame.isBonusFrame()).toEqual(true);
    });

    it('should return true if game included a spare', function() {
      frame.play(5);
      frame.play(5);

      expect(frame.isBonusFrame()).toEqual(true);
    });
  });
});

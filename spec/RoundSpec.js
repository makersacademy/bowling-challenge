describe('Round', function() {
  let round;

  beforeEach(function() {
    round = new Round();
  });

  describe('initial', function() {
    it('should have an array of 10 pins', function() {
      expect(round._pins).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should have a score of 0', function() {
      expect(round._score).toEqual(0)
    });
  });

  describe('knockDownPins', function() {
    it('should have 0 pins remaining after a strike', function() {
      round.knockDownPins(10);
      expect(round._pins).toEqual([]);
    });

    it('should have 10 pins remaining after a gutter ball', function() {
      round.knockDownPins(0);
      expect(round._pins).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should have 3 pins remaining 7 pins knocked down', function() {
      round.knockDownPins(7);
      expect(round._pins).toEqual([1, 2, 3]);
    });
  });

  describe('score', function() {
    it('should return a score of 7, if 7 pins knocked down', function() {
      round.knockDownPins(7);
      expect(round.score()).toEqual(7);
    });

    it('should return a score of 10 after a strike', function() {
      round.knockDownPins(10);
      expect(round.score()).toEqual(10);
    });
  });

  describe('reset', function() {
    it('should reset the pins array', function() {
      round.knockDownPins(5);
      round.reset();
      expect(round._pins).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe('isStrike', function() {
    it('returns true if round was a strike', function() {
      round.knockDownPins(10);
      expect(round.isStrike()).toEqual(true);
    });

    it('returns false if round was not a strike', function() {
      round.knockDownPins(5);
      expect(round.isStrike()).toEqual(false);
    });
  });
});

describe('Round', function() {
  let round;

  beforeEach(function() {
    round = new Round();
  });

  describe('initial', function() {
    it('should have a score of 0', function() {
      round = new Round();
      expect(round._score).toEqual(0)
    });
  });

  describe('score', function() {
    it('should return a score of 7, if 7 pins knocked down', function() {
      round = new Round(7)
      expect(round.score()).toEqual(7);
    });

    it('should return a score of 0 after a gutter ball', function() {
      round = new Round(0)
      expect(round.score()).toEqual(0);
    });

    it('should return a score of 10 after a strike', function() {
      round = new Round(10)
      expect(round.score()).toEqual(10);
    });
  });
});

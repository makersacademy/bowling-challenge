describe('Bowling Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('can bowl –', function() {
    it('a single ball', function() {
      expect(scorecard.bowl).toBeDefined();
    });

    it('a single ball and knock down some of the ten pins', function() {
      scorecard.bowl(10);
      expect(scorecard.cumulativeScore).toBeLessThan(11);
    });

    it('two balls and knock down some of the ten pins', function() {
      scorecard.bowl(10 - scorecard.bowl(10));
      expect(scorecard.cumulativeScore).toBeLessThan(11);
    });
  });

  describe('a frame –', function() {
    xit('is made up of a single ball if it scores 10', function() {
      expect(scorecard.bowl).toBeDefined();
    });

    xit('is made up of two balls if the first scores less than 10', function() {
      expect(scorecard.bowl).toBeDefined();
    });
  });
});

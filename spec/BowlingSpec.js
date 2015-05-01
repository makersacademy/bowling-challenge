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
      expect(scorecard.score).toBeLessThan(11);
    });

    it('two balls and knock down some of the ten pins', function() {
      scorecard.bowl(10 - scorecard.bowl(10));
      expect(scorecard.score).toBeLessThan(11);
    });
  });
});

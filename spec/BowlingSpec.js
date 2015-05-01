describe('Bowling Scorecard', function() {
  var scorecard = new Scorecard();

  describe('can bowl –', function() {
    it('a single ball', function() {
      expect(scorecard.bowl).toBeDefined();
    });

    it('a single ball and knock down some of the ten pins', function() {
      expect(scorecard.bowl()).toBeLessThan(11);
    });
  });
});

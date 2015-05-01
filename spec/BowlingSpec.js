describe('Bowling Scorecard', function() {
  var scorecard = new Scorecard();

  it('can bowl a single ball', function() {
      expect(scorecard.bowl).toBeDefined();
  });
});

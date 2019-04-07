describe('Scorecard', function() {

  var scorecard = new Scorecard;

  describe('Gutter Game', function() {

    it('does not hit any pins and scores 0', function() {
      for (i = 1; i <= 10; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.total()).toEqual(0);
      expect(scorecard.isComplete()).toEqual(true);
    });
  });

});

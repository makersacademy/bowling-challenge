describe('Feature Test', function() {

  var scorecard = new Scorecard;

  describe('Gutter Game', function() {

    it('does not hit any pins and scores 0', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.total()).toEqual(0);
      expect(scorecard.isComplete()).toEqual(true);
    });
  });

  describe('no strikes or spares complete game', function() {
    it('hits fewer than 5 pins on every roll and returns score', function() {
      for (i = 1; i <= 20; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(80);
      expect(scorecard.isComplete()).toEqual(true);
    });
  })

});

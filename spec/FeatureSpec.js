describe('Feature Test', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

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
  });

  describe('partially complete no strikes or spares game', function() {
    it('hits fewer than 5 pins on each roll in frame 1', function() {
      scorecard.roll(4);
      scorecard.roll(4);
      expect(scorecard.total()).toEqual(8);
    });

    it('hits fewer than 5 pins on each roll for 6 frames', function() {
      for (i = 1; i <= 12; i++) {
        scorecard.roll(4);
      }
      expect(scorecard.total()).toEqual(48);
      expect(scorecard.isComplete()).toEqual(false);
    })
  });

});

describe('scorecard', function() {
  var Scorecard = require('../../src/scorecard');
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('#record', function() {
    it('records the number of pins knocked down', function() {
      expect(scorecard.total()).toEqual(0);
      scorecard.record(2);
      expect(scorecard.total()).toEqual(2);
    });
  });

  describe('#total', function() {
    it('sums the number of pins knocked down for the game', function() {
      scorecard.record(2);
      scorecard.record(5);
      expect(scorecard.total()).toEqual(7);
    });
  });

  describe('#isComplete', function() {
    it('returns false if a full 10 frame game has not been completed', function() {
      expect(scorecard.isComplete()).toBe(false);
      for (var i = 0; i < 19; i++) {
        scorecard.record(0);
      };
      expect(scorecard.isComplete()).toBe(false);
    });
    it('returns true if a full 10 frame game has been completed', function() {
      for (var i = 0; i < 20; i++) {
        scorecard.record(0);
      };
      expect(scorecard.isComplete()).toBe(true);
    });
  });
});

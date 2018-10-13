'use strict';

describe ('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe ('#roll', function() {
    it('rolling the ball adds knockedPins score to an array', function() {
      scorecard.roll(4);
      expect(scorecard.frameScore).toEqual([4]);
    });

    it('rolling the ball adds one count to currentRoll tracker', function() {
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard.currentRoll).toEqual(2);
    });

  });

});

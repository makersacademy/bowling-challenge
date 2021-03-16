'use strict';


describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('roll', function() {
    it('shows score of a gutter game', function() {
      for (let i = 0; i < 20; i++) {
        scorecard.player_roll(0)
      }
      expect(scorecard.points()).toBe(0)
    });
  });
  describe('isSpare', function() {
    it('shows score with spare implementation', function() {
      scorecard.player_roll(7)
      scorecard.player_roll(3)
      scorecard.player_roll(5)
      for (let i = 0; i < 17; i++) {
        scorecard.player_roll(0)
      }
      expect(scorecard.points()).toBe(20)
    });
  });


});

'use strict';


describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('roll', function() {
    it('shows score of a gutter game', function() {
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      scorecard.player_roll(0)
      expect(scorecard.points()).toBe(0)
    });
  });

});

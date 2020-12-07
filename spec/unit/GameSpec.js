'use strict';

describe('Game', function() {

  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialisation of a new Game', function() {
    it('creates an empty frameScores array', function() {
      expect(game.frameScores).toEqual([]);
    });
  });

  describe('Recording frame points after frame is terminated', function() {
    it('appends the frame\'s points to the frameScores array for no strike or spare', function() {
      game.play(7, 2);
      expect(game.frameScores).toContain(9);
    });

    it('appends the frame\'s points to the frameScores array in the case of a strike', function() {
      game.play(10);
      expect(game.frameScores).toContain(10);
      expect(game.strike).toBe(true);
    });

    it('appends the frame\'s points to the frameScores array in the case of a strike', function() {
      game.play(8, 2);
      expect(game.frameScores).toContain(10);
      expect(game.spare).toBe(true);
    });
  });
});

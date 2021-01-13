// throw error if pins is not number or not 0 < 10
// spare followed by normal
// strike followed by normal
// strike followed by spare
// strike followed by strike followed by normal
// strike followed by strike followed by strike
// final frame
// all strikes - 300points

describe ('game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe ('for a gutter game', function() {
    it('returns 0', function() {
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.gameover()).toEqual(0);
    });
  });

  describe ('one frame, no spares/strikes', function() {
    it('returns total of frame', function() {
      game.roll(3);
      game.roll(4);
      expect(game.gameover()).toEqual(7);
    });
  });

  describe('multiple frames, no spares/strikes', function() {
    it('resets frame after every 2 rolls', function() {
      game.roll(3);
      game.roll(4);
      expect(game.currentFrame).toEqual([]);
    });

    it('saves all frames scores in scorer.scores', function() {
      for (let i = 0; i < 4; i++) {
        game.roll(4);
      }
      expect(game.scorer.scores).toEqual([8,8])
    });
  });

});

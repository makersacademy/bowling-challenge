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
      expect(game.currentFrame.pins).toEqual([]);
    });

    it('saves all frames scores in scorer.scores', function() {
      for (let i = 0; i < 4; i++) {
        game.roll(4);
      }
      expect(game.scorer.scores).toEqual([8, 8])
    });
  });

  describe('rolling a spare', function() {
    it('returns score as /', function() {
      game.roll(9);
      game.roll(1);
      expect(game.scorer.scores).toEqual(['/'])
    });

    it('adds bonus to score following next frame', function() {
      game.roll(9);
      game.roll(1);
      game.roll(3);
      game.roll(4);
      expect(game.scorer.scores).toEqual([13, 7]);
    });
  });

  describe('rolling a strike', function() {
    it('returns strike as X', function() {
      game.roll(10);
      expect(game.scorer.scores).toEqual(['X']);
    });

    it('adds bonus to score following next frame', function() {
      game.roll(10);
      game.roll(4);
      game.roll(2);
      expect(game.scorer.scores).toEqual([16, 6]);
    });
  });

  describe('rolling multiple strikes', function() {
    it('adds bonus to first strike following 2 more frames', function() {
      game.roll(10);
      game.roll(10);
      game.roll(6);
      game.roll(3);
      expect(game.scorer.scores).toEqual([29, 19, 9])
    });
  });

});

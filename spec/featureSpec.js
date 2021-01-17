// implement some sort of user interface with jquery - needs:
  // index.html, interface.html, index.css
// final frame
// all strikes - 300points

describe ('bowling', function() {

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
    it('does not add to score list', function() {
      game.roll(9);
      game.roll(1);
      expect(game.scorer.scores).toEqual([])
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
    it('adds bonus to score following next frame', function() {
      game.roll(10);
      game.roll(4);
      game.roll(2);
      expect(game.scorer.scores).toEqual([16, 6]);
    });
  });

  describe('strike followed by spare followed by normal', function() {
    it(' should score correctly', function() {
      game.roll(10);
      game.roll(6);
      game.roll(4);
      game.roll(3);
      game.roll(5);
      expect(game.scorer.scores).toEqual([20, 13, 8])
    });
  })

  describe('rolling multiple strikes', function() {
    it('adds bonus to first strike following 2 more frames', function() {
      game.roll(10);
      game.roll(10);
      game.roll(6);
      game.roll(3);
      expect(game.scorer.scores).toEqual([29, 19, 9])
    });

    it('awards 30, 30 if 4 strikes in row', function() {
      for (let i = 0; i < 4; i++) {
        game.roll(10);
      }
      expect(game.scorer.scores).toEqual([30, 30]);
    });
  });

});

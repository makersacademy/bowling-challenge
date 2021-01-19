describe ('game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('gameover', function() {
    it('returns the total score', function() {
      game.roll(1);
      game.roll(2);
      expect(game.gameover()).toEqual(3)
    });
  });

  describe('roll', function() {
    it('throws error for incorrect input', function() {
      expect( function() { game.roll(11) } ).toThrow('Please enter number between 0 and 10');
    });

    it('adds roll to frame', function() {
      game.roll(5);
      expect(game.currentFrame.pins).toEqual([5])
    });

    it('sends full frame to scorer for calculation', function() {
      game.roll(5);
      game.roll(3);
      expect(game.scorer.scores).toEqual([8])
    });

    it('resets frame', function() {
      game.roll(5);
      game.roll(3);
      expect(game.currentFrame.pins).toEqual([])
    })
  });

  describe('endAndResetFrame', function() {
    it('sends frame to scorer', function() {
      game.roll(5);
      game.roll(3);
      expect(game.scorer.scores).toEqual([8])
    });
  });

  describe('frameCount', function() {
    it('returns 1 for first frame', function() {
      game.roll(5);
      expect(game.frameCount()).toBe(1);
    });

    it('returns 5 for start of 5th frame', function() {
      for (let i = 0; i < 4; i++) {
        game.roll(10);
      }
      expect(game.frameCount()).toBe(5);
    })
  });

  describe('rollCount', function() {
    it('returns 1 for first roll of frame', function() {
      expect(game.rollCount()).toEqual(1);
    });
    it('returns 2 for second roll of frame', function() {
      game.roll(3);
      expect(game.rollCount()).toEqual(2);
    })
  });

  describe('_isAtStart', function() {
    it('returns true until first frame is complete', function() {
      game.roll(3);
      expect(game.isAtStart()).toBe(true);
    });

    it('returns false once first frame complete', function() {
      game.roll(10);
      expect(game.isAtStart()).toBe(false);
    })
  })

  describe('scoreCount', function() {
    it('returns 1 when first frame is finished', function() {
      game.roll(3);
      game.roll(5);
      expect(game.scoreCount()).toEqual(1);
    });

    it('returns 1 when 3 strikes are rolled', function() {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      expect(game.scoreCount()).toEqual(1);
    });
  })

  describe('_isOver', function() {
    it('returns true at end of play', function() {
      for (i = 0; i < 12; i++) {
        game.roll(10);
      }
      expect(game.isOver()).toBe(true);
    });
  });

});

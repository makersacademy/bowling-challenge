(function () {
  'use strict';

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('When the game is created', function () {
    it('has a frames array with 1 frame', function () {
      expect(game.frames).toContain([]);
    });

    it('can add a frame', function () {
      game.addFrame();
      expect(game.frames).toEqual([[],[]])
    });
  })

  describe('When playing the game', function () {
    it('adds first bowl to the frame', function () {
      game.addBowl(6);
      expect(game.frames[0]).toEqual([6])
    })

    it('adds second bowl to the frame', function () {
      game.addBowl(6);
      game.addBowl(3);
      expect(game.frames[0]).toEqual([6, 3])
    })

    it('creates a new frame on the third bowl, and adds bowl to the new frame', function () {
      game.addBowl(6);
      game.addBowl(3);
      game.addBowl(4);
      expect(game.frames[1]).toEqual([4])
    })
  })

  describe('When game is over', function () {
    it('can check if the game is over', function () {
      for (var i = 0; i < 10; i++) {
        game.addBowl(6);
        game.addBowl(3);
      }
      expect(game.gameOver()).toEqual(true)
    })
  })
})();

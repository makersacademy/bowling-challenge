(function () {
  'use strict';

  var game;

  describe('When the game is created', function () {
    beforeEach(function () {
      game = new Game()
    });

    it('has an empty frames array', function () {
      expect(game.frames).toEqual([]);
    });

    it('can add a frame', function () {
      game.addFrame();
      expect(game.frames).toEqual([[1,[]]])
    });

    it('can add more frames', function () {
      game.addFrame();
      game.addFrame();
      expect(game.frames).toContain([2,[]])
    });
  });

  describe('When playing the game', function () {
    beforeEach(function () {
      game = new Game()
    });

    it('adds first bowl to the frame', function () {
      game.addFrame();
      game.addBowl(6);
      expect(game.frames[0]).toEqual([1,[6]])
    })

    it('adds second bowl to the frame', function () {
      game.addFrame();
      game.addBowl(6);
      game.addBowl(3);
      expect(game.frames[0]).toEqual([1,[6, 3]])
    })

    it('creates a new frame on the third bowl, and adds bowl to the new frame', function () {
      game.addFrame();
      game.addBowl(6);
      game.addBowl(3);
      game.addBowl(4);
      expect(game.frames[1]).toEqual([2,[4]])
    })
  })
})();

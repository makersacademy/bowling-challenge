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
      expect(game.frames).toEqual([[[]]])
    });

    it('can add more frames', function () {
      game.addFrame();
      game.addFrame();
      expect(game.frames).toContain([[]])
    });
  });

  describe('When playing the game', function () {
    beforeEach(function () {
      game = new Game()
    });

    it('adds first bowl to the frame', function () {
      game.addFrame();
      game.addBowl(6);
      expect(game.frames[0]).toEqual([[6]])
    })

    it('adds second bowl to the frame', function () {
      game.addFrame();
      game.addBowl(6);
      game.addBowl(3);
      expect(game.frames[0]).toEqual([[6, 3]])
    })

    it('creates a new frame on the third bowl, and adds bowl to the new frame', function () {
      game.addFrame();
      game.addBowl(6);
      game.addBowl(3);
      game.addBowl(4);
      expect(game.frames[1]).toEqual([[4]])
    })
  })

  describe('When game is over', function () {
    beforeEach(function () {
      game = new Game()
    });
    
    it('can check if the game is over', function () {
      for (var i = 0; i < 10; i++) {
        game.addFrame();
        game.addBowl(6);
        game.addBowl(3);
      }
      expect(game.gameOver()).toEqual(true)
    })
  })
})();

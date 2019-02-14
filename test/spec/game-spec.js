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
      expect(game.frames).toEqual([[1,[null,null]]])
    });

    it('can add more frames', function () {
      game.addFrame();
      game.addFrame();
      expect(game.frames).toContain([2,[null,null]])
    });
  });
})();

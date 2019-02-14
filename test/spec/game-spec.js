(function () {
  'use strict';

  var game = new Game();

  describe('When the game is created', function () {
    it('has an empty frames array', function () {
      expect(game.frames).toEqual([]);
    });
  });
})();

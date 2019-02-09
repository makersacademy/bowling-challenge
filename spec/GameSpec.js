'use strict'

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpy('frame',['score']);
  });

  describe('there are frames', function() {
    it('there is no frame by default', function () {
      expect(game.frames).toEqual([]);
    });

    it('Store score after each frame', function () {
      game.frameScore(frame._score)
      expect(game.frames).toEqual([frame._score]);
    });
  });

});

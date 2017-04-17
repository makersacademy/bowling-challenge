'use strict';

describe('Game', function() {
  var game, frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  describe('#playedFrames', function() {
    it('has an initial value of 0', function() {
      expect(game.playedFrames).toEqual(0);
    });

    it('cannot be more than 10', function() {
      var noMoreFrames = 'Only 10 frames per game: no cheating, please!';
      for (var playedFrames = 0; playedFrames < 10; playedFrames++) {
          game.addPlayedFrame();
      }
      expect(function() { game.roll(1) }).toThrowError(noMoreFrames);
    });
  });

  describe('#getPlayedFrames', function() {
    it('returns the number of played frames', function() {
      expect(game.getPlayedFrames()).toEqual(game.playedFrames);
    });
  });

  describe('#addPlayedFrame', function() {
    it('updates the number of played frames by one', function() {
      game.addPlayedFrame();
      game.addPlayedFrame();
      game.addPlayedFrame();
      expect(game.playedFrames).toEqual(3);
    });
  });
});

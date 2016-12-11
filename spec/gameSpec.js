'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('when playing a game', function() {

    it('contains an empty array to track the frames', function() {
      expect(game._frames).toEqual([]);
    });

    it('is expected to respond to roll', function() {
      expect('roll' in game).toEqual(true);
    });

  });

});

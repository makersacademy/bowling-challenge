'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['method']);
  });

  describe('when playing a game', function() {

    it('contains an empty array to track the frames', function() {
      expect(game._frames).toEqual([]);
    });

    it('is expected to respond to roll', function() {
      expect('roll' in game).toEqual(true);
    });

    it('when roll is called it creates a new frame', function() {
      game.roll();
      expect(game._frames.length).toEqual(1);
    });

  });

});

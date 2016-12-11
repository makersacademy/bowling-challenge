'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['method']);
  });

  describe('when beginning a new game', function() {
    it('contains an empty array to track the frames', function() {
      expect(game._frames).toEqual([]);
    });

    it('the score will start at zero', function() {
      expect(game._score).toEqual(0);
    });
  });

  describe('when playing a game', function() {
    it('is expected to respond to takeTurn', function() {
      expect('takeTurn' in game).toEqual(true);
    });

    it('when roll is called it creates a new frame', function() {
      game.takeTurn();
      expect(game._frames.length).toEqual(1);
    });
  });

});

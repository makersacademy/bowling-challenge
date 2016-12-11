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
      expect(game._totalScore).toEqual(0);
    });
  });

  describe('when playing a game', function() {
    it('when roll is called it creates a new frame', function() {
      game.takeTurn();
      expect(game._frames.length).toEqual(1);
    });

    // it('can add the total score at the end of a game' function() {
    //   for (var i = 0; i < 10; i++) {
    //     game.takeTurn(1, 1);
    //   }
    //   expect(game.totalScore).toEqual(20);
    // });
  });

  describe('when calculating scores', function() {
    it('can calculate the score for each frame and add this to an array', function() {
      expect(game._scores).toEqual([]);
    });
  });

});

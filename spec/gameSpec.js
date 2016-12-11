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
  });

  describe('when calculating scores', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(1, 1);
      }
    });

    it('can calculate the score for a frame', function() {
      game._frameScore();
      expect(game._scores[0]).toEqual(2);
    });

    it('can calculate the total score', function() {
      game._frameScore();
      game._addTotalScore();
      expect(game._totalScore).toEqual(20);
    });
  });

  describe('when a game is finished', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(1, 1);
      }
      game._frameScore();
      game._addTotalScore();
    });

    it('resets the frames', function() {
      game.takeTurn();
      expect(game._frames).toEqual([]);
    });

    it('resets the score per frame', function() {
      game.takeTurn();
      expect(game._scores).toEqual([]);
    });

    it('resets the total score back to zero', function() {
      game.takeTurn();
      expect(game._totalScore).toEqual(0);
    });
  });

});

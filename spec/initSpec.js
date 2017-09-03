'use strict';

describe('Init Unit Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('Roll Number', function() {
    it('roll number starts at 0', function() {
      expect(game.getCurrentRollNumber()).toEqual(0);
    });
  });

  describe('Pins Knocked Down', function() {
    it('pins knocked down starts at 0', function() {
      expect(game.getCurrentPinsKnockedDown()).toEqual(0);
    });
  });

  describe('Score', function() {
    it('score starts at 0', function() {
      expect(game.getCurrentScore()).toEqual(0);
    });
  });

  describe('Frames', function() {
    it('frames start empty', function() {
      expect(game.getCurrentFrames()).toEqual([]);
    });
  });

  describe('Game Status', function() {
    it('game status starts as Inactive', function() {
      expect(game.getCurrentGameStatus()).toEqual('Inactive');
    });
  });

});

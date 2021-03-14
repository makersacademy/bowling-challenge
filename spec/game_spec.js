'use strict';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });
  
  describe('enterPins', function() {
    it('user can add the results of a single bowl', function() {
      game.enterPins(6);
  
      expect(game.currentFrame).toEqual(1);
      expect(game.currentBowl).toEqual(2);
    });
    
    it('user can add results of both bowls in a frame', function() {
      game.enterPins(7);
      game.enterPins(1);

      expect(game.currentFrame).toEqual(2);
      expect(game.currentBowl).toEqual(1);
    });

    it('correctly records a strike', function() {
      game.enterPins(10);

      expect(game.currentFrame).toEqual(2);
      expect(game.currentBowl).toEqual(1);
    });

    it('enters bonus bowls to open frames', function() {
      game.enterPins(10);

      let frame = game.frames[1];

      expect(game.currentFrame).toEqual(2);
      expect(game.currentBowl).toEqual(1);
      expect(frame.score).toEqual(10);
      expect(frame.complete).toEqual(false);

      game.enterPins(7);
      game.enterPins(2);
      game.enterPins(4);

      expect(game.currentFrame).toEqual(3);
      expect(game.currentBowl).toEqual(2);
      expect(frame.score).toEqual(19);
      expect(frame.complete).toEqual(true);
    });
  });
});
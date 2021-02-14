'use strict'

describe('Game', () => {
  var game

  beforeEach(() => {
    game = new Game();
  });

  describe('A Game ', () => {

    it('knows what the current frame is', () => {
      expect(game.currentFrame().id).toEqual(1);
    });
    
    it('can log a roll', () => {
      game.roll(5);
      expect(game.currentFrame().score()).toEqual(5);
    });
  });

  
});
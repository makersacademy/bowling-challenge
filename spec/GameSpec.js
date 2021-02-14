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

  describe('Scoring: -', () => {
    it('reports 300 for a perfect game', () => {
      for (var i = 0; i < 12; i++) {
        game.roll(10);
      }
      expect(game.currentGameScore()).toEqual(300);
    });
    
  });

  
});
'use strict';

describe('Feature', () => {
  var game;
  var frame;

  beforeEach(() => {
    game = new Game;
    });

  describe('A Standard game', () => {
    it('Correctly scores a game with no special rolls', () => {
      for (var i = 0; i < 20; i++) {
        game.roll(4);
      };
      expect(game.totalScore()).toEqual(80);
    });
  });

  describe('A Gutter game', () => {
    it('Scores a total of 0 points across 20 rolls', () => {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      };
      expect(game.totalScore()).toEqual(0);
    });
  });

  describe('A Perfect game', () => {
    it('Scores a total of 300 points across 12 rolls', () => {
      for (var i = 0; i < 12; i++) {
        game.roll(10);
      };
      expect(game.totalScore()).toEqual(300); 
    });
  });

  describe('A game of spares', () => {
    it('Scores a total of 150 across 21 rolls', () => {
      for (var i = 0; i < 21; i++) {
        game.roll(5);
      };
      expect(game.totalScore()).toEqual(150);
    });
  });

  describe('A game of spares, where every other ball is a gutter ball', () => {
    it('Scores 100 across 21 rolls', () => {
      for (var i = 0; i <10; i++) {
        game.roll(0);
        game.roll(10);
      };
      game.roll(0);
      expect(game.totalScore()).toEqual(100);
    });
  });

  describe('A random game containing bonus rolls', () => {
    it('Scores 74 across a full game', () => {
      for (var i = 0; i <4; i++) {
        game.roll(4);
        game.roll(2);
        game.roll(3);
      };
      game.roll(10);
      game.roll(9);
      game.roll(0);
      for (var i = 0; i <2; i++) {
        game.roll(2);
        game.roll(3);
      };
      expect(game.totalScore()).toEqual(74);
    });
  });
});
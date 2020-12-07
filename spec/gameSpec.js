'use strict';

describe('Game', () => {
  var Game = require('../src/game.js');
  var game;

  beforeEach(() => {
    game = new Game();
  });

  it('creates an instance of Game', () => {
    expect(game).toBeInstanceOf(Game);
  });

  describe('totalScore', () => {
    it('has a total score of 0 by default', () => {
      expect(game.totalScore).toEqual(0);
    })
  });

  describe('scorecard', () => {
    it('has an empty scorecard by default', () => {
      expect(game.scorecard).toEqual([]);
    })
  });

  describe('rollNumber', () => {
    it('has a roll number of 1 by default', () => {
      expect(game.rollNumber).toEqual(1);
    })

    it('increases the roll number as each score is added', () => {
      game.addScore(4);
      game.addScore(3);
      expect(game.rollNumber).toEqual(3);
    })
  });

  describe('#addScore', () => {
    it('instructs a game to add a score', () => {
      expect(game.addScore).toBeDefined();
    });

    it('adds scores to the frame', () => {
      game.addScore(4);
      game.addScore(6);
      expect(game.frame).toEqual([4, 6])
    });
  });
});

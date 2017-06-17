'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe('frames', function() {

    it('Starts out containing one frame', function() {
      var frames = game.frames();
      expect(frames.length).toEqual(1)
    });
  });

  describe('addNewFrame', function() {

    it('Adds a new frame to the array', function() {
      game.addNewFrame();
      var frames = game.frames();
      expect(frames.length).toEqual(2);
    });
  });

  describe('_currentFrame', function() {

    it('Knows the index of the current frame', function() {
      expect(game._currentFrame).toEqual(0)
      for(var i = 0; i < 2; i++) { game.bowl(4); };
      expect(game._currentFrame).toEqual(1);
    })
  })

  describe('currentScore', function() {

    it('(after one frame) knows the current score', function() {
      for(var i = 0; i < 2; i++) { game.bowl(4); };
      game.calculateScore();
      expect(game.currentScore()).toEqual(8);
    });

    it('(after two frames, no bonuses) knows the current score', function() {
      for(var i = 0; i < 4; i++) { game.bowl(3); };
      game.calculateScore();
      expect(game.currentScore()).toEqual(12);
    });
  });

  describe('bowl', function() {

    it('Throws an error unless the argument passed is a number between 0 and 10', function() {
      expect(function() { game.bowl(-4); }).toThrow(new Error('Argument must be an integer between 0 and 10'))
      expect(function() { game.bowl("hi"); }).toThrow(new Error('Argument must be an integer between 0 and 10'))
      expect(function() { game.bowl(3.5); }).toThrow(new Error('Argument must be an integer between 0 and 10'))
    });
  });

  describe('addBonuses', function() {

    it('Can calculate the spare bonus (after scoring a non-strike on the current frame)', function() {
      for(var i = 0; i < 3; i++) { game.bowl(5); };
      game.calculateScore();
      expect(game.currentScore()).toEqual(20);
    });

    it('Only adds the spare bonus for one bowl', function() {
      for(var i = 0; i < 2; i++) { game.bowl(5); };
      game.bowl(7);
      game.bowl(2);
      game.calculateScore();
      expect(game.currentScore()).toEqual(26);
    })

    it('Can calculate the spare bonus after scoring a strike on the current frame', function() {
      for(var i = 0; i < 2; i++) { game.bowl(5); };
      game.bowl(10);
      game.calculateScore();
      expect(game.currentScore()).toEqual(30);
    });

    it('Can calculate the strike bonus for the first bowl (non-strike)', function() {
      game.bowl(10);
      game.bowl(5);
      game.calculateScore();
      expect(game.currentScore()).toEqual(20);
    })
  });
});

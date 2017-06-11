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
      expect(game.currentScore()).toEqual(8);
    });

    it('(after two frames, no bonuses) knows the current score', function() {
      for(var i = 0; i < 4; i++) { game.bowl(3); };
      expect(game.currentScore()).toEqual(12);
    });
  });
});

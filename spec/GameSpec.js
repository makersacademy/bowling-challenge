'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe('frames', function() {

    it('Starts out as an empty array', function() {
      expect(game.frames()).toEqual([])
    });
  });

  describe('addNewFrame', function() {

    it('Adds a new frame to the array', function() {
      game.addNewFrame();
      var frames = game.frames();
      expect(frames.length).toEqual(1);
    });
  });

  describe('currentScore', function() {

    it('(after one frame) knows the current score', function() {
      game.addNewFrame()
      spyOn(Math, 'random').and.returnValue(0.4);
      for(var i = 0; i < 2; i++) { game.bowl(); }
      expect(game.currentScore()).toEqual(8);
    });
  });
});

"use strict";

describe('Game', function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpy('frame');
  });
  // spyOn(Math, 'floor').and.returnValue(10)

  it('has a starting score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('starts off with no frames', function() {
    expect(game._frames).toEqual([]);
  });

  it('adds frames to the game', function() {
    game.addFrames(frame);
    expect(game._frames).toEqual([frame]);
  });

  it('updates game score', function() {
    game.addFrames(frame);
    game.updateScore(frame).toEqual(10);
  });

});

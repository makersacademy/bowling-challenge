"use strict";

describe('Game', function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('has a starting score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('starts off with no frames', function() {
    expect(game.frames).toEqual([]);
  });

  it('adds frames to the game', function() {
    game.addFrames(frame);
    expect(game.frames).toEqual([frame]);
  });

  it('updates game score', function() {
    spyOn(Math, 'floor').and.returnValue(4)
    game.addFrames(frame);
    game.frames[0].bowl();
    game.frames[0].bowl();
    game.updateScore();
    expect(game.score).toEqual(8);
  });

});

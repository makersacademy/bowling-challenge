// 'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('is defined', function() {
    expect(game).toBeDefined();
  });

  it('starts with no score', function() {
    expect(game.totalScore).toEqual(0);
  });

  it('starts with an empty array of frames', function() {
    expect(game.frames).toEqual([]);
  });

  it('adds to frames with normal bowls', function() {
    game.bowl(4);
    game.bowl(5);
    console.log(game.frames)
    expect(game.frames.length).toEqual(1);
  });

  it('adds correct frame to frames', function() {
    game.bowl(3);
    game.bowl(6);
    expect(game.frames[0].score).toEqual([3, 6]);
  });
});

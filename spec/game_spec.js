'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('starts with zero points', function() {
    expect(game.calculateScore()).toEqual(0);
  });

  it('can add points', function() {
    game.bowl(8);
    expect(game.calculateScore()).toEqual(8);
  });

  it('can add complex points', function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(3);
    game.bowl(5);
    game.bowl(10);
    game.bowl(3);
    expect(game.calculateScore()).toEqual(42);
  });

  it('knows what turn it is/what frame it is on', function() {
    game.bowl(8);
    game.bowl(1);
    game.bowl(4);
    expect(game.calculateFrameNumber()).toEqual(2);
  });

  it('knows what frame it is on, even with several strikes', function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(3);
    game.bowl(5);
    game.bowl(10);
    game.bowl(3);
    expect(game.calculateFrameNumber()).toEqual(5);
  });












});

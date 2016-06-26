'use strict';

var Game = require('../src/game.js');

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has an empty frame to start', function() {
    expect(game.frame).toEqual([]);
  });

  it('has a score of zero to start', function() {
    expect(game.score).toEqual(0);
  });

  it('has an empty scorecard to start', function() {
    expect(game.scorecard).toEqual([]);
  });

  it('updates the frame with a throw', function() {
    game.throw(7);
    expect(game.frame).toEqual([7]);
  });

  it('updates the frames with no spares/strikes', function() {
    for (var i = 1; i < 8; i++) {
      game.throw(3);
    }
    expect(game.frame).toEqual([3])
    expect(game.scorecard).toEqual([[3,3],[3,3],[3,3]]);
  });

  it('updates the frames, strike involved', function() {
    game.throw(3);
    game.throw(3);
    game.throw(10);
    game.throw(3);
    game.throw(3);
    game.throw(10);
    game.throw(3);
    expect(game.frame).toEqual([3])
    expect(game.scorecard).toEqual([[3,3],[10],[3,3],[10]]);
  });

  it('updates the frames, strikes and spare involved', function() {
    game.throw(3);
    game.throw(3);
    game.throw(10);
    game.throw(3);
    game.throw(3);
    game.throw(10);
    game.throw(3);
    game.throw(7)
    expect(game.frame).toEqual([])
    expect(game.scorecard).toEqual([[3,3],[10],[3,3],[10],[3,7]]);
  });

  it('updates the score with no strikes/spares', function() {
    for (var i = 1; i < 8; i++) {
      game.throw(3);
    }
    expect(game.score).toEqual(18);
  });

});

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
    expect(game.totalScore).toEqual(0);
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
    oneStrike();
    expect(game.frame).toEqual([])
    expect(game.scorecard).toEqual([[3,3],[10],[3,3],[3,3]]);
  });

  it('updates the frames, strikes and spare involved', function() {
    strikesSpares();
    expect(game.frame).toEqual([])
    expect(game.scorecard).toEqual([[3,3],[10],[3,7],[10],[3,3]]);
  });

  // it('calculates the score', function() {
  //   for (var i = 1; i < 21; i++) {
  //     game.throw(3);
  //   }
  //   console.log(game.scorecard);
  //   expect(game.frame).toEqual(60);
  // })
  //
  // it('calculates the score', function() {
  //   strikesSpares()
  //   console.log(game.scorecard);
  //   expect(game.frame).toEqual(60);
  // })

  function strikesSpares() {
    game.throw(3);
    game.throw(3);
    game.throw(10);
    game.throw(3);
    game.throw(7);
    game.throw(10);
    game.throw(3);
    game.throw(3);
  }

  function oneStrike() {
    game.throw(3);
    game.throw(3);
    game.throw(10);
    game.throw(3);
    game.throw(3);
    game.throw(3);
    game.throw(3);
  }

  function oneSpare() {
    game.throw(3);
    game.throw(3);
    game.throw(3);
    game.throw(7);
    game.throw(3);
    game.throw(3);
  }
});

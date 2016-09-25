/* jshint -W117 */

describe('BowlingGame', function() { 'use strict';

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function bowlFrames(n, frame) {
    for(var i = 0; i < n; i++) {
      game.roll(frame);
    }
  }

  it('can score a gutter game', function() {
    bowlFrames(10, [0,0])
    expect(game.score()).toEqual(0);
  })

  it('can score a game with two regular frames', function() {
    bowlFrames(1, [1,2])
    bowlFrames(1, [3,4])
    expect(game.score()).toEqual(10);
  })

  it('can score a game with a spare frame', function() {
    bowlFrames(1, [5,5])
    bowlFrames(1, [1,2])
    expect(game.score()).toEqual(14);
  })

  it('can score a game with a strike frame', function() {
    bowlFrames(1, [10,0])
    bowlFrames(1, [1,2])
    expect(game.score()).toEqual(16);
  })

  it('can score a game with a double strike', function() {
    bowlFrames(2, [10,0])
    bowlFrames(1, [1,2])
    expect(game.score()).toEqual(37);
  })
});

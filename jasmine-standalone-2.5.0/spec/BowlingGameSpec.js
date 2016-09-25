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

});

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
});

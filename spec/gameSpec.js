'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at 0 points', function () {
    expect(game.calculateCurrentScore()).toEqual(0);
  });

  // it('returns a final score of 0 when rolling a gutter game', function() {
  //
  //   game.addFrame(0, 0)
  //   game.addLastFrame(0, 0)
  // });

});

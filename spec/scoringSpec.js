'use strict';

describe('BowlingGame', function() {

  it('handle gutter game', function() {
    var game = new BowlingGame();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});

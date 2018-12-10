'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  //player never hits a pin (20 zero scores)
  it('can roll a gutter game', function() {
    rollMore(0, 10);
    expect(game.score()).toBe(0);
  });

  it('can roll ones', function() {
    rollMore(1, 10);
    }
    expect(game.score()).toBe(10);
  });

  var rollMore = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };
});

'use strict'

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function rollMany (rolls, pins) {
		for (var i = 0; i < rolls; i++) {
			game.roll(pins);
		}
	}

  it("Rolls all 0's", function() {
    // for (var i = 0; i < 20; i++) {
    //   game.roll(0)
    // }
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("Rolls all 1's", function() {
    rollMany(20, 1)
    expect(game.score()).toEqual(20);
  });

});

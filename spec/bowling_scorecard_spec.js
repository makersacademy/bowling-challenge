'use strict'

describe('Frame of Bowling', function() {
    var game;

    beforeEach(function(){
		game = new BowlingGame();
	});

  it("should handle strike", function() {
		rollPins(10, 0);
		expect(game.score()).to.equal(10);
	});

  it("should handle spare", function() {
		rollPins(5, 5);
		expect(game.score()).to.equal(10);
	});
});

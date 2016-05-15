"use strict";

describe("Game", function(){
	var game;

	beforeEach(function(){
		game = new Game();
	});

	it('moves to next frame when current frame completes', function(){
		expect(game.currentFrameNumber()).toEqual(1);
		game.addScore(10);
		expect(game.currentFrameNumber()).toEqual(2);

		game.addScore(3);
		game.addScore(4);
		expect(game.currentFrameNumber()).toEqual(3);
	});
});
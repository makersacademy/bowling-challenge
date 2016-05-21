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

	it('calculates the score in each frame', function(){
		game.addScore(4);
		game.addScore(5);
		expect(game.calculateScores()).toEqual(9);
		game.addScore(6);
		game.addScore(4);
		game.addScore(5);
		expect(game.calculateScores()).toEqual(24);
		game.addScore(10);
		game.addScore(4);
		game.addScore(5);
		expect(game.calculateScores()).toEqual(43);
	});
});
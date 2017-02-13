'use strict';
describe("Game", function() {
	var game;
	beforeEach(function() {
		game = new Game();
	});
	it("should create with 11 frames", function() {
		var length = game._frames.length;
		expect(length).toEqual(11);
	});
	it("first frame play knocks 10 pins will move on to next frame", function() {
		game.play(10);
		expect(game.frameIndex()).toEqual(1);
	});
	it("first play knocks 10 pins, will gain bonus for the next two play - strike bonus", function() {
		game.play(10);
		game.play(3);
		game.secondPlay(2);
		expect(game.score()).toEqual(20);
	});
	it("first play and second play knocks 10 pins, will gain bonus for the next first play - spare bonus", function() {
		game.play(7);
		game.secondPlay(3);
		game.play(2);
		expect(game.score()).toEqual(14);
	});
	it("last 10th frame is a spare- 10th frame bonus", function() {
		for (var i = 1; i < 11; i++) {
			game.play(7);
			game.secondPlay(3);
			game.nextFrame();
		};
		expect(game.hasBonusPlay()).toEqual(true);
	});
	it("last 10th frame is a strike - 10th frame bonus", function() {
		for (var i = 1; i < 11; i++) {
			game.play(10);
		};
		expect(game.hasBonusPlay()).toEqual(true);
	});
	it("12 strikes - perfect game score 300", function() {
		for (var i = 1; i < 12; i++) {
			game.play(10);
		};
		game.hasPerfectGame();
		expect(game.score()).toEqual(300);
	});
	it("gutter game", function() {
		for (var i = 1; i < 10; i++) {
			game.play(0);
		};
		expect(game.hasGutter()).toEqual(true);
	});
});
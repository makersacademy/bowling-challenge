'use strict'; 
describe("Game", function(){
	var game;

	beforeEach(function(){
		game = new Game();
	});

		it("should create with 10 frames", function(){
			var length = game._frames.length;
			expect(length).toEqual(10);
		});

		it("first frame play will knocked down x number of pins", function(){
			var pins = 2;
			game.play(pins);
			expect(game._frames[game.frameIndex()]._firstRollPins).toEqual(pins);
			expect(game.frameIndex()).toEqual(0);
		});

		it("first frame play knocks 10 pins will move on to next frame", function(){
			game.play(10);
			expect(game.frameIndex()).toEqual(1);
		});

		it("first play knocks 10 pins, will gain bonus for the next two play - strike bonus", function(){
			game.play(10);
			game.play(3);
			game.secondPlay(2);
			expect(game.score()).toEqual(20);
		});
});
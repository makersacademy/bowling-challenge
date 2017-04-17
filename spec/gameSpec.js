"use strict"

describe("Game", function(){
	let game;
	let frame;

	beforeEach(function(){
		game = new Game;
		frame = new Frame;
	});

	it("initializes with and empty bowlingFrames array", function(){
		expect(game.bowlingFrames.length).toEqual(0);
	});

	it("initializes with a score of 0", function(){
		expect(game.score).toEqual(0);
	});


	describe("#playFrame", function(){
		it("appends to frames a new frame", function(){
			game.playFrame();
			expect(game.bowlingFrames.length).toEqual(1);
		});

		it("doesn't add to bowlingFrames if bowlingFrames.length === 2", function(){
			game.playFrame();
			game.playFrame();
			game.playFrame();
			expect(game.bowlingFrames.length).toEqual(2);
		});
		
		it("appends into the scores array what gets shifted off the bowlingFrames array", function(){
			game.playFrame();
			game.playFrame();
			game.playFrame();
			expect(game.scoresArray.length).toEqual(1);
		});


	});

















});
"use strict";


describe("Game", function() {
	var game;
	var frame;

	beforeEach(function() {
		game =  new Game();
		frame = jasmine.createSpy("frame");
	});

	describe("When a game starts", function() {
		it("should start with a score of 0", function() {
			expect(game.calculateScore()).toEqual(0);
		});

		it("should start with a tally of 0 frames", function() {
			expect(game.frametally).toEqual(0);
		});
	});

	describe("When a frame is recorded", function() {

		it("should increase the tally of frames recorded when a frame is submitted", function() {
			game.recordFrame(frame);
			expect(game.frametally).toEqual(1);
		});

		it("should append the frame to the game's record of all frames when a frame is submitted",  function() {
			game.recordFrame(frame);
			expect(game.submittedframes[game.submittedframes.length - 1]).toEqual(frame);
		});

		it("should calculate the score when a frame is submitted", function(){
			game.frametally = 8;
			game.score = 100;
			expect(game.recordFrame(frame)).toEqual("Frame " + game.frametally + " of 10 complete. Your current score is 100");
		});

		it("should calculate the final score when the frame tally reaches 10", function() {
			game.frametally = 9;
			game.score = "100";
			expect(game.recordFrame(frame)).toEqual("Game is now concluded. Your final score is: 100");
		});
	});
});

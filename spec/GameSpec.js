// "use strict";

describe("Game", function() {
	var game;
	var frame;
	var next_frame;
	var final_frame;

	beforeEach(function() {
		game =  new Game();
		frame = jasmine.createSpyObj('frame', {
			'isScore': 5,
			'isAstrike': true,
			'isAspare': true,
			'recBonus': 5
		});
		final_frame = jasmine.createSpyObj('final_frame', {
			'isScore': 10,
			'isAstrike': true,
			'isAspare': false,
			'recBonus': 5
		});
		final_frame2 = jasmine.createSpyObj('final_frame2', {
			'isScore': 10,
			'isAstrike': false,
			'isAspare': false,
			'recBonus': 5
		});
		final_frame3 = jasmine.createSpyObj('final_frame3', {
			'isScore': 10,
			'isAstrike': false,
			'isAspare': true,
			'recBonus': 5
		});
	});

	describe("When a game starts", function() {
		it("should start with a score of 0", function() {
			expect(game.score).toEqual(0);
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
			expect(game.submittedframes[game.submittedframes.length - 1].isScore).toEqual(frame.isScore);
		});

		it("should query if a bonus score is applicable to the previous frame when a frame is submitted", function() {
			game.submittedframes = [frame];
			game.frametally = 1;
			expect(game.recordFrame(frame)).toEqual(game.isBonus(frame));
		});

		it("should update the current score to the sum of all submitted frames", function() {
			game.submittedframes = [frame];
			game.recordFrame(frame);
			expect(game.score).toEqual(10);
		});

		it("should calculate a sum of all submitted/completed frames", function(){
			game.submittedframes = [frame, frame, frame];
			game.recordFrame(frame);
			expect(game.score).toEqual(20);
		});
    //
		// it("should calculate the score of an ongoing game", function() {
		// 	game.submittedframes = [frame, frame, frame];
		// 	game.frametally = 3;
		// 	game.recordFrame(frame);
		// 	expect(game.calculateScore()).toEqual("Frame " + game.frametally + " of 10 complete. Your current score is 20");
		// });

		it("should calculate a final score when the frame tally reaches 10", function() {
			game.submittedframes = [frame, frame, frame, frame, frame, frame, frame, frame, frame];
			game.frametally = 9;
			game.recordFrame(final_frame2);
			expect(game.calculateScore()).toEqual("Game is now concluded. Your final score is: 55");
		});

		it("should prompt the player to roll twice again if they hit a strike in the final frame", function(){
			game.submittedframes = [frame, frame, frame, frame, frame, frame, frame, frame, frame];
			game.frametally = 9;
			game.recordFrame(final_frame);
			expect(game.calculateScore()).toEqual("You have hit a strike in the final frame, you have 2 bonus rolls remaining. Please roll again.");
		});

		it("should prompt the player to roll once again if they hit a spare in the final frame", function(){
			game.submittedframes = [frame, frame, frame, frame, frame, frame, frame, frame, frame];
			game.frametally = 9;
			game.recordFrame(final_frame3);
			game.bonus_tenth_rolls = 1;
			expect(game.calculateScore()).toEqual("You have hit a spare in the final frame, you have " + game.bonus_tenth_rolls + " bonus rolls remaining. Please roll again.");
		});

		it("should evaluate a strike in the final frame", function() {
			game.submittedframes = [frame, frame, frame, frame, frame, frame, frame, frame, frame];
			game.frametally = 10;
			game.isTenthFrameStrike(frame);
			expect(game.tennerstrike).toEqual(true);
		});

		it("should evaluate a spare in the final frame", function() {
			game.submittedframes = [frame, frame, frame, frame, frame, frame, frame, frame, frame];
			game.frametally = 10;
			game.isTenthFrameSpare(final_frame3);
			expect(game.tennerspare).toEqual(true);
		});

		it("should note if a player records a Gutter Game", function() {
			game.frametally = 10;
			game.score = 0;
			expect(game.calculateScore()).toEqual("You have hit a Gutter Game!!! Boo-effing-hoo!!! You score nul points.");
		});

		it("should note if a player records a Perfect Game", function() {
			game.tennerstrike = true;
			game.score = 300;
			expect(game.calculateScore()).toEqual("You have hit a Perfect Score!!! Bowling heaven!!! Respect!!!");
		});
	});

	describe("When a prior frame is a strike or a spare", function() {
		it("should expose whether a previous frame is a strike", function() {
			game.submittedframes = [frame];
			expect(game.onStrike()).toEqual(true);
		});

		it("should expose whether a previous frame is a spare", function() {
			game.submittedframes = [frame];
			expect(game.onSpare()).toEqual(true);
		});
	});
});

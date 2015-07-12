// 10 frames per game
// * 2 throws in each frame (except the 10th where there is a possibility of 3 throws if a strike or spare was thrown in the 9th)
// * 1 - 9 frames
// * strike - if all 10 pins are knocked down on the 1st throw (throw1) - second throw is disabled
// * spare - if 10 pins are knocked down on the 2nd throw (throw2)
// * score if total pins knocked down in a frame is less than 10, the num of pins knocked down is throw1 + throw2 (returns a numeric score rather than a spare / or strike X)
// * 1 - 9 frames
// * 10th frame - if strike or spare thrown in previous go - 3 throws, if not - disable third throw
//
// # Scoring
// * strike - add 10, plus the number of pins knocked down by the next two balls to the score of the previous frame
// * spare - add 10, plus the number of pins knocked down by the next ball to the score of the previous frame
// * regular - add the total of pins knocked down by the two throws to the previous frame. If no pins knocked down = gutter ball = zero points

// count score for each frame (frameScore) and adds to totalScore
// knows when all 10 frames are complete and it is the end of the game
// knows when a perfact game score of 300 is achieved



describe('A game of bowling', function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});


	it('consists of 10 frames', function(){
		game.frameCount = 9;
		game.nextFrame();
		expect(game.frameCount).toEqual(10);
	});

	it('does not contain 11 frames', function(){
		game.frameCount = 10;
		game.nextFrame();
		expect(game.frameCount).toEqual(10);
	});

	//test for max 2 throws per frame

	//test for max 3 throws max in final 10th frame


	describe('play for 1st frame - MVP - at least it\'ll be a quick game', function() {

		it('calculates frame score array when throw is not spare or strike', function() {
			game.throw1(1);
			game.throw2(3);
			expect(game.frameScore).toEqual([1,3])
		});

		it('calculates cumulative score when throw is not spare or strike', function() {
			game.throw1(1);
			game.throw2(3);
			expect(game.cumulativeScore).toEqual(4)
		});

		// it('detects a spare', function() {
		// 	game.throw1(5);
		// 	game.throw2(5);
		// 	expect(game.isSpare)toBe(true)
		// });

		// it('detects a strike', function() {
		// 	game.throw1(5);
		// 	game.throw2(5);
		// 	expect(game.isStrike)toBe(true)
		// });

		// it('doesn\'t incorrectly detect a strike', function() {
		// 	game.throw1(5);
		// 	game.throw2(5);
		// 	expect(game.isStrike)toBe(false)
		// });

		// it('detects a gutter frame', function() {
		// 	game.throw1(0);
		// 	game.throw2(0);
		// 	expect(game.isGutter)toBe(true)
		// });


	});


// describe('scoring', function() {
// it('knows what its max/perfect score is', function() {
// 	expect(game.maxScore).toEqual(300);
// });
// });



});

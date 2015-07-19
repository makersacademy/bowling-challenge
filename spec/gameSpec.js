// 10 frames per game

//
// # Scoring
// * strike - add 10, plus the number of pins knocked down by the next two balls to the score of the previous frame
// * spare - add 10, plus the number of pins knocked down by the next ball to the score of the previous frame
// * regular - add the total of pins knocked down by the two throws to the previous frame. If no pins knocked down = gutter ball = zero points

// count score for each frame (frameScore) and adds to totalScore
// knows when all 10 frames are complete and it is the end of the game
// knows when a perfact game score of 300 is achieved



describe('A bowling game', function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});


	it('consists of 10 frames', function(){
		game.frameCount = 9;
		game.nextFrame();
		expect(game.frameCount).toEqual(10);
	});

	xit('does not contain 11 frames', function(){
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



describe('scoring', function() {
	// it('knows what its max/perfect score is', function() {
	// 	expect(game.maxScore).toEqual(300);
	// });

	xit('gutter game', function() {
		for(var i = 0; i < 20; i++) {
			game.throw(0)
		}

		expect(game.score).toEqual(0);
	});

});



});

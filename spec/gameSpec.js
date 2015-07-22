// # Scoring
// * strike - add 10, plus the number of pins knocked down by the next two balls to the score of the previous frame??
// * spare - add 10, plus the number of pins knocked down by the next ball to the score of the previous frame
// * regular - add the total of pins knocked down by the two throws to the previous frame.

// knows when all 10 frames are complete and it is the end of the game
// knows when a perfact game score of 300 is achieved

describe('A throwBalling game', function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	describe('frames', function() {

		it('consists of 10 frames', function(){
			expect(game.frameList.length).toEqual(10);
		});

		it('ends on frame 10/final frame', function() {
			expect(game.frameList[9].isFinalFrame).toBe(true);
		});

		it('knows the current frame is frame 1', function() {
			game.throwBall(1);
			// 	expect(game.frameCounter()).toEqual(1);
			expect(game.currentFrame()).toEqual(game.frameList[0]);
		});

		it('knows the current frame is frame 2', function() {
			game.throwBall(1);
			game.throwBall(3);
			game.throwBall(4);
			expect(game.currentFrame()).toEqual(game.frameList[1]);
		});

		it('adds throw scores to array', function() {
			game.throwBall(1);
			game.throwBall(3);
			expect(game.throwList).toEqual([1,3]);
		});

	});


	describe('scoring and bonuses...', function() {

		it('calculates score array for first throw/throwBall', function() {
			game.throwBall(3);
			expect(game.runningTotal()).toEqual(3);
		});

		it('calculates score for multiple throwBalls/throws', function() {
			game.throwBall(1);
			game.throwBall(3);
			game.throwBall(5);
			game.throwBall(3);
			expect(game.runningTotal()).toEqual(12);
		});

		xit('strike in 1st frame and 7 + 1 in 2nd frame', function() {
			game.throwBall(10);
			game.throwBall(7);
			game.throwBall(1);
			expect(game.runningTotal()).toEqual(26);
		});

	});


	describe('whole game scoring', function() {

		it('gutter game', function() {
			for(var i = 0; i < 20; i++) {
				game.throwBall(0)
			}
			expect(game.runningTotal()).toEqual(0);
		});

		xit('perfect game', function() {
			for(var i = 0; i < 20; i++) {
				game.throwBall(10)
			}
			expect(game.runningTotal()).toEqual(300);
		});

	});

});

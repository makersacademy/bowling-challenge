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

	describe('frames', function() {

		it('consists of 10 frames', function(){
			expect(game.frameList.length).toEqual(10);
		});

		it('ends on frame 10/final frame', function() {
			expect(game.frameList[9].isFinalFrame).toBe(true);
		});

		it('knows the current frame index', function() {
			game.bowl(1);
		// 	expect(game.frameCounter()).toEqual(1);
			expect(game.currentFrame()).toEqual(game.frameList[0]);
		});

		it('knows the current frame index', function() {
			game.bowl(1);
			game.bowl(3);
			game.bowl(4);
			expect(game.currentFrame()).toEqual(game.frameList[1]);
		});

		it('adds bowl scores to bowls array', function() {
			game.bowl(1);
			game.bowl(3);
			expect(game.bowls).toEqual([1,3]);
		});

	});


	describe('scoring and bonuses...', function() {

		it('calculates score array for first throw/bowl', function() {
			game.bowl(3);
			expect(game.runningTotal()).toEqual(3);
		});

		it('calculates score for multiple bowls/throws', function() {
			game.bowl(1);
			game.bowl(3);
			game.bowl(5);
			game.bowl(3);
			expect(game.runningTotal()).toEqual(12);
		});

	});


	describe('whole game scoring', function() {

		it('gutter game', function() {
			for(var i = 0; i < 20; i++) {
				game.bowl(0)
			}
			expect(game.runningTotal()).toEqual(0);
		});

		xit('perfect game', function() {
			for(var i = 0; i < 20; i++) {
				game.bowl(10)
			}
			expect(game.runningTotal()).toEqual(300);
		});

	});


});

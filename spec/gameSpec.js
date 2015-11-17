describe('Game', function() {

	var game;

	beforeEach(function() {
		game = new Game();
	});

	describe('#rollBall', function() {
		it('throws the ball and knocks down a given number of pins', function() {
			expect(game.rollBall(3)).toBe(3);
		});

		it('pushes 10 and 0 to the array if it is a strike', function() {
			game.rollBall(10);
			expect(game.rollsArray).toEqual([10,0]);
			expect(game.isSecondRoll()).toBe(true);
		});
	});

	describe('#isSecondRoll', function() {
		it('should be return true when the number of times that the ball is thrown is even', function() {
			game.rollBall(1);
			game.rollBall(3);
			expect(game.isSecondRoll()).toBe(true);
		});
	});

	describe('#score', function() {
		it('should return the sum of array at the end of the frame', function() {
			game.rollBall(1);
			game.rollBall(2);
			expect(game.currentScore).toEqual([3]);
		});
	});

	describe('#spare', function() {
		it('is a spare if the sum of the last two rolls is 10', function() {
			game.rollBall(6);
			game.rollBall(4);
			expect(game.spare()).toEqual(true);
		});
		it('is not a spare if the sum of the last two rolls is different to 10', function() {
			game.rollBall(4);
			game.rollBall(2);
			expect(game.spare()).toEqual(false);
		});
	});


});
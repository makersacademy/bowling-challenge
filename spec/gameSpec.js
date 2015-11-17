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

});
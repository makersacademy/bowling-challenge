describe('Game', function() {
	beforeEach( function() {
		game = new Game();
	});
	describe('#scoreRecorder', function() {
		it('should record scores of each game', function() {
			game.scoreRecorder([2,4])
			expect(game.scoreCard.length).toBe(1)
			expect(game.scoreCard[0]).toEqual([2,4])
		});
	});
});
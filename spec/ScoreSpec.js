describe('Score', function() {
		var score;
		var frameNumbers = [[5,2],[10,0],[2,4],[4,6],[2,4]];
		var frameSymbols = [[5,2],['X','-'],[2,4],[4,'/'],[2,4]];
		beforeEach(function() {
			score = new Score(frameNumbers, frameSymbols)
		});

	describe('initial calculation', function() {
		it('calculates the total points of each frame', function() {
			expect(score.points).toEqual([7,10,6,10,6]);
		});
	});

	describe('checking additional points', function() {
		it('adds the points of the whole consecutive frame with a strike', function() {
			score.checkAdditionalPoints();
			expect(score.points[1]).toEqual(16);
		});
	});

});

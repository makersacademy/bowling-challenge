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
		it('adds the points of the first next throw with a spare', function() {
			score.checkAdditionalPoints();
			expect(score.points[3]).toEqual(12);
		});
	});
	
	describe('convert frames', function() {
		it('shows an X when a strike is thrown', function() {
			score.convertFrames();
			expect(score.boardSymbols[1]).toEqual(['X','-'])
		});
	});

	describe('a spare', function() {
		it('shows a "/" when a spare is thrown', function() {
			score.convertFrames();
			expect(score.boardSymbols[3]).toEqual([4,'/']);
		});
	});

});

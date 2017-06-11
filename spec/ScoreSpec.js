describe('Score', function() {
		var score;
		var frameNumbers = [[5,2],[10,0],[2,4],[4,6],[8,2],[2,1],[10,0],[0,1],[0,0],[8,2,2]];
		var frameSymbols = [[5,2],['X','-'],[2,4],[4,'/'],[8,'/'],[2,1],['X','-'],[0,1],[0,0],[8,2,2]];
		beforeEach(function() {
			score = new Score(frameNumbers, frameSymbols)
		});

	describe('initial calculation', function() {
		it('calculates the total points of each frame', function() {
			expect(score.points).toEqual([7,10,6,10,10,3,10,1,0,10]);
		});
	});

	describe('checking additional points', function() {
		it('adds the points of the whole consecutive frame with a strike', function() {
			score.checkAdditionalPoints();
			expect(score.points[1]).toEqual(16);
		});
		it('adds the points of the first next throw with a spare', function() {
			score.checkAdditionalPoints();
			expect(score.points[3]).toEqual(18);
		});
	});
/*	
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
*/

	describe('last frame', function() {
		it('adds an extra roll if a spare is thrown', function() {
			score.checkAdditionalPoints();
			expect(score.points[9]).toEqual(12);
		});		
		it('adds 10 + an extra roll if a strike is thrown', function() {
			frameNumbers[9] = [10,0,5];
			score = new Score(frameNumbers);
			score.checkAdditionalPoints();
			expect(score.points[9]).toEqual(25);
		});
	});
});

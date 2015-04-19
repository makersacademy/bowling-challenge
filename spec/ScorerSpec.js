describe('Scorer', function() {
	var scorer;

	beforeEach(function() {
		scorer = new Scorer();
	});

	function multiRoll(numberOfRolls, RollScore) {
		for (var i = 0; i < numberOfRolls; i++) {
			scorer.roll(RollScore)
		};
	};

	describe('calculating the score', function() {

		it('gives a score of 0 if no pins are hit', function() {
			multiRoll(20, 0);
			expect(scorer.total()).toEqual(0);
		});

		it('gives a score of a 300 following a perfect game', function() {
			multiRoll(12,10);
			expect(scorer.total()).toEqual(300);
		});

		it('gives a score of 12 if the second roll is a spare', function() {
			scorer.roll(4);
			scorer.roll(6);
			scorer.roll(1);
			multiRoll(17, 0)
			expect(scorer.total()).toEqual(12);
		});

		it('gives a score of 10 with 1 strike', function() {
			scorer.roll(10);
			multiRoll(18, 0);
			expect(scorer.total()).toEqual(10);
		});

		it('gives a score of 20 after a stike follow by a 2 then a 3', function() {
			scorer.roll(10);
			scorer.roll(2);
			scorer.roll(3);
			multiRoll(16, 0);
			expect(scorer.total()).toEqual(20);
		});

		it('gives a score of 65 following 3 strikes and 2 singles', function() {
			multiRoll(3,10);
			multiRoll(2,1);
			multiRoll(12,0);
			expect(scorer.total()).toEqual(65);
		});


	})

});